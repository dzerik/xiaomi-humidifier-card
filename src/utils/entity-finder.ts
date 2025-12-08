import {
  HomeAssistant,
  HassEntity,
  XiaomiHumidifierCardConfig,
  SWITCH_DEFINITIONS,
  SENSOR_DEFINITIONS,
  NUMBER_DEFINITIONS,
  SELECT_DEFINITIONS,
  BUTTON_DEFINITIONS,
} from '../types';

export interface SwitchInfo {
  id: string;
  entity: HassEntity;
  name: string;
  icon: string;
}

export interface SensorInfo {
  id: string;
  entity: HassEntity;
  name: string;
  icon: string;
  unit?: string;
}

export interface NumberInfo {
  id: string;
  entity: HassEntity;
  name: string;
  icon: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
}

export interface SelectInfo {
  id: string;
  entity: HassEntity;
  name: string;
  icon: string;
  options: string[];
}

export interface ButtonInfo {
  id: string;
  entity: HassEntity;
  name: string;
  icon: string;
}

export interface WaterStatus {
  id: string;
  isOn: boolean;
  icon: string;
}

/**
 * EntityFinder - utility class for finding related entities
 */
export class EntityFinder {
  private _hass: HomeAssistant;
  private _config: XiaomiHumidifierCardConfig;
  private _entityId: string;
  private _relatedEntities: Map<string, string> = new Map();
  private _baseId: string;

  constructor(hass: HomeAssistant, config: XiaomiHumidifierCardConfig) {
    this._hass = hass;
    this._config = config;
    this._entityId = config.entity;

    const deviceId = this._entityId.split('.')[1];
    this._baseId = deviceId
      .replace(/_fan$/, '')
      .replace(/_humidifier$/, '')
      .replace(/_air_humidifier$/, '');

    this._findRelatedEntities();
  }

  // Get the main entity
  get entity(): HassEntity | undefined {
    return this._hass?.states[this._entityId];
  }

  get entityId(): string {
    return this._entityId;
  }

  get baseId(): string {
    return this._baseId;
  }

  // Find all related entities - STRICT matching by baseId
  private _findRelatedEntities(): void {
    this._relatedEntities.clear();

    for (const entityId of Object.keys(this._hass.states)) {
      const parts = entityId.split('.');
      const entityName = parts[1];

      // Only match entities that start with our baseId followed by underscore or end with baseId
      if (entityName.startsWith(this._baseId + '_') || entityName === this._baseId) {
        const domain = parts[0];
        const suffix = entityName === this._baseId ? '' : entityName.replace(this._baseId + '_', '');
        this._relatedEntities.set(`${domain}.${suffix}`, entityId);
      }
    }
  }

  /**
   * Find entity by key - STRICT matching only related entities
   * @param key - entity key like 'led', 'buzzer', 'temperature'
   * @param domain - entity domain like 'switch', 'sensor', 'number'
   */
  findEntityByKey(key: string, domain: string): HassEntity | undefined {
    // Check config override first
    const configKey = `${key}_entity` as keyof XiaomiHumidifierCardConfig;
    if (this._config[configKey]) {
      const entity = this._hass?.states[this._config[configKey] as string];
      if (entity) return entity;
    }

    // Look for exact match in related entities
    const exactKey = `${domain}.${key}`;
    const exactEntityId = this._relatedEntities.get(exactKey);
    if (exactEntityId) {
      return this._hass?.states[exactEntityId];
    }

    // Also try just the key (for cases where suffix matches)
    for (const [mapKey, entityId] of this._relatedEntities) {
      if (mapKey === `${domain}.${key}` || mapKey.endsWith(`.${key}`)) {
        const entity = this._hass?.states[entityId];
        if (entity && entity.entity_id.split('.')[0] === domain) {
          return entity;
        }
      }
    }

    return undefined;
  }

  // Legacy findEntity for compatibility
  findEntity(patterns: string[]): HassEntity | undefined {
    for (const pattern of patterns) {
      // Parse domain and key from pattern
      const parts = pattern.split('.');
      if (parts.length === 2) {
        const entity = this.findEntityByKey(parts[1], parts[0]);
        if (entity) return entity;
      } else {
        // Just a key, try common domains
        for (const domain of ['sensor', 'switch', 'number', 'select', 'button', 'binary_sensor']) {
          const entity = this.findEntityByKey(pattern, domain);
          if (entity) return entity;
        }
      }
    }
    return undefined;
  }

  // Get current humidity
  getCurrentHumidity(): number | undefined {
    const attrs = this.entity?.attributes;

    // Check config override
    if (this._config.humidity_entity) {
      const sensor = this._hass?.states[this._config.humidity_entity];
      if (sensor && sensor.state !== 'unavailable' && sensor.state !== 'unknown') {
        return Number(sensor.state);
      }
    }

    // Check main entity attributes (skip if null)
    if (attrs?.humidity !== undefined && attrs.humidity !== null) {
      return Number(attrs.humidity);
    }
    if (attrs?.current_humidity !== undefined && attrs.current_humidity !== null) {
      return Number(attrs.current_humidity);
    }
    // JSQS models use relative_humidity
    if (attrs?.relative_humidity !== undefined && attrs.relative_humidity !== null) {
      return Number(attrs.relative_humidity);
    }

    // Search for humidity sensor in related entities only
    const humiditySensor = this.findEntityByKey('humidity', 'sensor');
    if (humiditySensor && humiditySensor.state !== 'unavailable' && humiditySensor.state !== 'unknown') {
      return Number(humiditySensor.state);
    }

    return undefined;
  }

  // Get target humidity
  getTargetHumidity(): number | undefined {
    const attrs = this.entity?.attributes;
    if (attrs?.target_humidity !== undefined) {
      return Number(attrs.target_humidity);
    }

    const number = this.findEntityByKey('target_humidity', 'number');
    if (number) {
      return Number(number.state);
    }

    return undefined;
  }

  // Get temperature
  getTemperature(): number | undefined {
    const attrs = this.entity?.attributes;
    if (attrs?.temperature !== undefined) {
      return Number(attrs.temperature);
    }

    const sensor = this.findEntityByKey('temperature', 'sensor');
    if (sensor && sensor.state !== 'unavailable' && sensor.state !== 'unknown') {
      return Number(sensor.state);
    }

    return undefined;
  }

  // Get current mode
  getCurrentMode(): string | undefined {
    const attrs = this.entity?.attributes;
    if (attrs?.preset_mode) {
      return String(attrs.preset_mode);
    }
    if (attrs?.mode) {
      return String(attrs.mode);
    }

    const select = this.findEntityByKey('mode', 'select');
    if (select) {
      return select.state;
    }

    return undefined;
  }

  // Get available modes
  getAvailableModes(): string[] {
    const attrs = this.entity?.attributes;
    if (attrs?.preset_modes && Array.isArray(attrs.preset_modes)) {
      return attrs.preset_modes as string[];
    }

    const select = this.findEntityByKey('mode', 'select');
    if (select?.attributes?.options && Array.isArray(select.attributes.options)) {
      return select.attributes.options as string[];
    }

    return ['Low', 'Medium', 'High', 'Humidity'];
  }

  // Check if device is on
  isOn(): boolean {
    const state = this.entity?.state;
    return state === 'on' || state === 'true';
  }

  // Check if unavailable
  isUnavailable(): boolean {
    const state = this.entity?.state;
    return state === 'unavailable' || state === 'unknown' || !state;
  }

  // Get switches - only from related entities
  getSwitches(): SwitchInfo[] {
    if (this._config.show_switches === false) return [];

    const switches: SwitchInfo[] = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(SWITCH_DEFINITIONS)) {
      const entity = this.findEntityByKey(key, 'switch');
      if (entity && !foundEntityIds.has(entity.entity_id) && entity.state !== 'unavailable') {
        foundEntityIds.add(entity.entity_id);
        switches.push({
          id: key,
          entity,
          name: def.name,
          icon: def.icon,
        });
      }
    }

    return switches;
  }

  // Get sensors - only from related entities
  getSensors(): SensorInfo[] {
    if (this._config.show_sensors === false) return [];

    const sensors: SensorInfo[] = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(SENSOR_DEFINITIONS)) {
      // Skip humidity (shown in circle), temperature (shown separately), target_humidity and mode
      if (key === 'humidity' || key === 'temperature' || key === 'target_humidity' || key === 'mode') continue;

      const entity = this.findEntityByKey(key, 'sensor');
      if (entity && entity.state !== 'unavailable' && entity.state !== 'unknown' && !foundEntityIds.has(entity.entity_id)) {
        foundEntityIds.add(entity.entity_id);
        sensors.push({
          id: key,
          entity,
          name: def.name,
          icon: def.icon,
          unit: def.unit,
        });
      }
    }

    return sensors;
  }

  // Get numbers - only from related entities
  getNumbers(): NumberInfo[] {
    if (this._config.show_numbers === false) return [];

    const numbers: NumberInfo[] = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(NUMBER_DEFINITIONS)) {
      // Skip target_humidity (shown in circle)
      if (key === 'target_humidity') continue;

      const entity = this.findEntityByKey(key, 'number');
      if (entity && entity.state !== 'unavailable' && !foundEntityIds.has(entity.entity_id)) {
        foundEntityIds.add(entity.entity_id);
        numbers.push({
          id: key,
          entity,
          name: def.name,
          icon: def.icon,
          min: Number(entity.attributes.min ?? def.min),
          max: Number(entity.attributes.max ?? def.max),
          step: Number(entity.attributes.step ?? def.step),
          unit: def.unit,
        });
      }
    }

    return numbers;
  }

  // Get selects - only from related entities
  getSelects(): SelectInfo[] {
    if (this._config.show_selects === false) return [];

    const selects: SelectInfo[] = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(SELECT_DEFINITIONS)) {
      // Skip mode (shown as buttons)
      if (key === 'mode') continue;

      const entity = this.findEntityByKey(key, 'select');
      if (entity && entity.state !== 'unavailable' && !foundEntityIds.has(entity.entity_id)) {
        foundEntityIds.add(entity.entity_id);
        const options = entity.attributes.options as string[] || def.options || [];
        selects.push({
          id: key,
          entity,
          name: def.name,
          icon: def.icon,
          options,
        });
      }
    }

    return selects;
  }

  // Get buttons - only from related entities
  getButtons(): ButtonInfo[] {
    if (this._config.show_buttons === false) return [];

    const buttons: ButtonInfo[] = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(BUTTON_DEFINITIONS)) {
      const entity = this.findEntityByKey(key, 'button');
      if (entity && entity.state !== 'unavailable' && !foundEntityIds.has(entity.entity_id)) {
        foundEntityIds.add(entity.entity_id);
        buttons.push({
          id: key,
          entity,
          name: def.name,
          icon: def.icon,
        });
      }
    }

    return buttons;
  }

  // Get water status - check both attributes and binary sensors
  getWaterStatus(): WaterStatus | null {
    const attrs = this.entity?.attributes;

    // Check main entity attributes for water-related info
    if (attrs) {
      // no_water attribute
      if ('no_water' in attrs) {
        if (attrs.no_water === true) {
          return { id: 'no_water', isOn: true, icon: 'mdi:water-off' };
        }
      }

      // water_tank_detached attribute
      if ('water_tank_detached' in attrs) {
        if (attrs.water_tank_detached === true) {
          return { id: 'water_tank_detached', isOn: true, icon: 'mdi:cup-off-outline' };
        }
      }

      // water_shortage attribute
      if ('water_shortage' in attrs) {
        if (attrs.water_shortage === true) {
          return { id: 'water_shortage', isOn: true, icon: 'mdi:water-alert' };
        }
      }

      // If we have ANY water attribute and all are false/ok, show water_ok
      if ('no_water' in attrs || 'water_tank_detached' in attrs || 'water_shortage' in attrs) {
        return { id: 'water_ok', isOn: false, icon: 'mdi:water-check' };
      }
    }

    // Check binary_sensor entities - only from related entities
    const noWaterSensor = this.findEntityByKey('no_water', 'binary_sensor');
    if (noWaterSensor && noWaterSensor.state !== 'unavailable') {
      if (noWaterSensor.state === 'on') {
        return { id: 'no_water', isOn: true, icon: 'mdi:water-off' };
      }
    }

    const waterShortageSensor = this.findEntityByKey('water_shortage', 'binary_sensor');
    if (waterShortageSensor && waterShortageSensor.state !== 'unavailable') {
      if (waterShortageSensor.state === 'on') {
        return { id: 'water_shortage', isOn: true, icon: 'mdi:water-alert' };
      }
    }

    const waterTankSensor = this.findEntityByKey('water_tank', 'binary_sensor');
    if (waterTankSensor && waterTankSensor.state !== 'unavailable') {
      if (waterTankSensor.state === 'off') {
        return { id: 'water_tank_detached', isOn: true, icon: 'mdi:cup-off-outline' };
      }
    }

    // If we found any water-related binary_sensor and they're all ok
    if (noWaterSensor || waterShortageSensor || waterTankSensor) {
      return { id: 'water_ok', isOn: false, icon: 'mdi:water-check' };
    }

    // No water-related sensors found - return null (don't show status)
    return null;
  }
}
