import {
  HomeAssistant,
  HassEntity,
  XiaomiHumidifierCardConfig,
  SWITCH_DEFINITIONS,
  SENSOR_DEFINITIONS,
  BINARY_SENSOR_DEFINITIONS,
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

  // Find all related entities
  private _findRelatedEntities(): void {
    this._relatedEntities.clear();

    for (const entityId of Object.keys(this._hass.states)) {
      const parts = entityId.split('.');
      if (parts[1].startsWith(this._baseId)) {
        const domain = parts[0];
        const suffix = parts[1].replace(this._baseId + '_', '');
        this._relatedEntities.set(`${domain}.${suffix}`, entityId);
      }
    }
  }

  // Find entity by pattern
  findEntity(patterns: string[]): HassEntity | undefined {
    for (const pattern of patterns) {
      // Check config override first
      const configKey = `${pattern}_entity` as keyof XiaomiHumidifierCardConfig;
      if (this._config[configKey]) {
        const entity = this._hass?.states[this._config[configKey] as string];
        if (entity) return entity;
      }

      // Search in related entities
      for (const [key, entityId] of this._relatedEntities) {
        if (key.includes(pattern)) {
          return this._hass?.states[entityId];
        }
      }

      // Search by entity_id pattern
      for (const entityId of Object.keys(this._hass?.states || {})) {
        if (entityId.includes(pattern)) {
          return this._hass.states[entityId];
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

    // Search for humidity sensor
    for (const entityId of Object.keys(this._hass?.states || {})) {
      if (entityId.startsWith('sensor.') &&
          entityId.includes(this._baseId) &&
          (entityId.endsWith('_humidity') || entityId.includes('humidity'))) {
        const entity = this._hass.states[entityId];
        if (entity && entity.state !== 'unavailable' && entity.state !== 'unknown') {
          if (!entityId.includes('target')) {
            return Number(entity.state);
          }
        }
      }
    }

    return undefined;
  }

  // Get target humidity
  getTargetHumidity(): number | undefined {
    const attrs = this.entity?.attributes;
    if (attrs?.target_humidity !== undefined) {
      return Number(attrs.target_humidity);
    }

    const number = this.findEntity(['number.target_humidity', 'target_humidity']);
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

    const sensor = this.findEntity(['sensor.temperature', 'temperature']);
    if (sensor) {
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

    const select = this.findEntity(['select.mode', 'mode_select']);
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

    const select = this.findEntity(['select.mode', 'mode_select']);
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

  // Get switches
  getSwitches(): SwitchInfo[] {
    if (this._config.show_switches === false) return [];

    const switches: SwitchInfo[] = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(SWITCH_DEFINITIONS)) {
      const entity = this.findEntity([`switch.${key}`, key]);
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

  // Get sensors
  getSensors(): SensorInfo[] {
    if (this._config.show_sensors === false) return [];

    const sensors: SensorInfo[] = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(SENSOR_DEFINITIONS)) {
      // Skip humidity (shown in circle), temperature (shown separately), target_humidity and mode
      if (key === 'humidity' || key === 'temperature' || key === 'target_humidity' || key === 'mode') continue;

      const entity = this.findEntity([`sensor.${key}`, key]);
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

  // Get numbers
  getNumbers(): NumberInfo[] {
    if (this._config.show_numbers === false) return [];

    const numbers: NumberInfo[] = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(NUMBER_DEFINITIONS)) {
      // Skip target_humidity (shown in circle)
      if (key === 'target_humidity') continue;

      const entity = this.findEntity([`number.${key}`, key]);
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

  // Get selects
  getSelects(): SelectInfo[] {
    if (this._config.show_selects === false) return [];

    const selects: SelectInfo[] = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(SELECT_DEFINITIONS)) {
      // Skip mode (shown as buttons)
      if (key === 'mode') continue;

      const entity = this.findEntity([`select.${key}`, key]);
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

  // Get buttons
  getButtons(): ButtonInfo[] {
    if (this._config.show_buttons === false) return [];

    const buttons: ButtonInfo[] = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(BUTTON_DEFINITIONS)) {
      const entity = this.findEntity([`button.${key}`, key]);
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

  // Get water status
  getWaterStatus(): WaterStatus | null {
    const attrs = this.entity?.attributes;

    // Check if main entity has water-related attributes
    const hasWaterAttrs = attrs && (
      'no_water' in attrs ||
      'water_tank_detached' in attrs ||
      'water_shortage' in attrs
    );

    if (hasWaterAttrs) {
      if (attrs?.no_water === true) {
        return { id: 'no_water', isOn: true, icon: 'mdi:water-off' };
      }
      if (attrs?.water_tank_detached === true) {
        return { id: 'water_tank_detached', isOn: true, icon: 'mdi:cup-off-outline' };
      }
      if (attrs?.water_shortage === true) {
        return { id: 'water_shortage', isOn: true, icon: 'mdi:water-alert' };
      }
      return { id: 'water_ok', isOn: false, icon: 'mdi:water-check' };
    }

    // Fallback to binary_sensor entities
    for (const [key, def] of Object.entries(BINARY_SENSOR_DEFINITIONS)) {
      const entity = this.findEntity([`binary_sensor.${key}`, key]);
      if (entity && entity.state !== 'unavailable') {
        const isOn = entity.state === 'on';
        if ((key === 'no_water' || key === 'water_shortage') && isOn) {
          return { id: key, isOn: true, icon: def.icon_on };
        }
        if (key === 'water_tank' && !isOn) {
          return { id: 'water_tank_detached', isOn: true, icon: def.icon_off };
        }
      }
    }

    return { id: 'water_ok', isOn: false, icon: 'mdi:water-check' };
  }
}
