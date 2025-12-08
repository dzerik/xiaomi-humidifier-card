import { LitElement, html, PropertyValues, TemplateResult, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { styles } from './styles';
import { localize, getLanguage } from './localize/localize';
import {
  HomeAssistant,
  HassEntity,
  XiaomiHumidifierCardConfig,
  SWITCH_DEFINITIONS,
  SENSOR_DEFINITIONS,
  BINARY_SENSOR_DEFINITIONS,
} from './types';

// Import editor component to register it
import './components/editor';

// Card info for Home Assistant
const CARD_VERSION = '1.0.3';

console.info(
  `%c XIAOMI-HUMIDIFIER-CARD %c ${CARD_VERSION} `,
  'color: white; background: #03a9f4; font-weight: bold;',
  'color: #03a9f4; background: white; font-weight: bold;'
);

// Register card with Home Assistant
(window as any).customCards = (window as any).customCards || [];
if (!(window as any).customCards.find((c: { type: string }) => c.type === 'xiaomi-humidifier-card')) {
  (window as any).customCards.push({
    type: 'xiaomi-humidifier-card',
    name: 'Xiaomi Humidifier Card',
    description: 'Thermostat-style card for Xiaomi humidifiers',
    preview: true,
  });
}

// Only define if not already defined
const defineCustomElement = (name: string, constructor: CustomElementConstructor) => {
  if (!customElements.get(name)) {
    customElements.define(name, constructor);
  }
};

// Using manual registration instead of decorator to avoid duplicate registration
// @customElement('xiaomi-humidifier-card')
export class XiaomiHumidifierCard extends LitElement {
  static styles = styles;

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: XiaomiHumidifierCardConfig;

  // Entity cache
  private _entityId: string = '';
  private _relatedEntities: Map<string, string> = new Map();

  public setConfig(config: XiaomiHumidifierCardConfig): void {
    if (!config.entity) {
      throw new Error('Entity is required');
    }

    this._config = {
      show_name: true,
      show_state: true,
      show_current_humidity: true,
      show_target_humidity: true,
      show_mode: true,
      show_power: true,
      compact: false,
      ...config,
    };

    this._entityId = config.entity;
  }

  public getCardSize(): number {
    return this._config?.compact ? 3 : 5;
  }

  // Get the main entity
  private get _entity(): HassEntity | undefined {
    return this.hass?.states[this._entityId];
  }

  // Get related entities (sensors, switches, etc.)
  private _getRelatedEntities(): void {
    if (!this.hass || !this._entityId) return;

    const deviceId = this._entityId.split('.')[1];
    const baseId = deviceId.replace(/_fan$/, '').replace(/_humidifier$/, '');

    this._relatedEntities.clear();

    // Find related entities
    for (const entityId of Object.keys(this.hass.states)) {
      const parts = entityId.split('.');
      if (parts[1].startsWith(baseId)) {
        const domain = parts[0];
        const suffix = parts[1].replace(baseId + '_', '');
        this._relatedEntities.set(`${domain}.${suffix}`, entityId);
      }
    }
  }

  // Find entity by pattern
  private _findEntity(patterns: string[]): HassEntity | undefined {
    for (const pattern of patterns) {
      // Check config override first
      const configKey = `${pattern}_entity` as keyof XiaomiHumidifierCardConfig;
      if (this._config[configKey]) {
        const entity = this.hass?.states[this._config[configKey] as string];
        if (entity) return entity;
      }

      // Search in related entities
      for (const [key, entityId] of this._relatedEntities) {
        if (key.includes(pattern)) {
          return this.hass?.states[entityId];
        }
      }

      // Search by entity_id pattern
      for (const entityId of Object.keys(this.hass?.states || {})) {
        if (entityId.includes(pattern)) {
          return this.hass.states[entityId];
        }
      }
    }
    return undefined;
  }

  // Get current humidity
  private get _currentHumidity(): number | undefined {
    const attrs = this._entity?.attributes;

    // Check config override for humidity entity first
    if (this._config.humidity_entity) {
      const sensor = this.hass?.states[this._config.humidity_entity];
      if (sensor && sensor.state !== 'unavailable' && sensor.state !== 'unknown') {
        console.debug('[xiaomi-humidifier-card] Found humidity from config entity:', sensor.state);
        return Number(sensor.state);
      }
    }

    // Check main entity attributes (skip if null)
    if (attrs?.humidity !== undefined && attrs.humidity !== null) {
      console.debug('[xiaomi-humidifier-card] Found humidity in attrs:', attrs.humidity);
      return Number(attrs.humidity);
    }
    if (attrs?.current_humidity !== undefined && attrs.current_humidity !== null) {
      console.debug('[xiaomi-humidifier-card] Found current_humidity in attrs:', attrs.current_humidity);
      return Number(attrs.current_humidity);
    }

    // Build base ID from entity
    const deviceId = this._entityId.split('.')[1];
    // Remove common suffixes to get base device ID
    const baseId = deviceId
      .replace(/_fan$/, '')
      .replace(/_humidifier$/, '')
      .replace(/_air_humidifier$/, '');

    console.debug('[xiaomi-humidifier-card] Looking for humidity sensor, baseId:', baseId);

    // Search for humidity sensor - try multiple patterns
    for (const entityId of Object.keys(this.hass?.states || {})) {
      // Match patterns like:
      // sensor.{baseId}_humidity
      // sensor.{baseId}_current_humidity
      // sensor.{device}_humidity where device contains baseId
      if (entityId.startsWith('sensor.') &&
          entityId.includes(baseId) &&
          (entityId.endsWith('_humidity') || entityId.includes('humidity'))) {
        const entity = this.hass.states[entityId];
        if (entity && entity.state !== 'unavailable' && entity.state !== 'unknown') {
          // Make sure it's actually a humidity value (not target_humidity)
          if (!entityId.includes('target')) {
            console.debug('[xiaomi-humidifier-card] Found humidity sensor:', entityId, '=', entity.state);
            return Number(entity.state);
          }
        }
      }
    }

    // Fallback: check if main entity has any humidity-related attribute (non-null)
    for (const key of Object.keys(attrs || {})) {
      if (key.toLowerCase().includes('humidity') && !key.toLowerCase().includes('target')) {
        const val = attrs?.[key];
        if (val !== null && val !== undefined) {
          if (typeof val === 'number' || (typeof val === 'string' && !isNaN(Number(val)))) {
            console.debug('[xiaomi-humidifier-card] Found humidity in attr:', key, '=', val);
            return Number(val);
          }
        }
      }
    }

    console.debug('[xiaomi-humidifier-card] No humidity found. Entity attrs:', attrs);
    return undefined;
  }

  // Get target humidity
  private get _targetHumidity(): number | undefined {
    const attrs = this._entity?.attributes;
    if (attrs?.target_humidity !== undefined) {
      return Number(attrs.target_humidity);
    }

    const number = this._findEntity(['number.target_humidity', 'target_humidity']);
    if (number) {
      return Number(number.state);
    }

    return undefined;
  }

  // Get temperature
  private get _temperature(): number | undefined {
    const attrs = this._entity?.attributes;
    if (attrs?.temperature !== undefined) {
      return Number(attrs.temperature);
    }

    const sensor = this._findEntity(['sensor.temperature', 'temperature']);
    if (sensor) {
      return Number(sensor.state);
    }

    return undefined;
  }

  // Get current mode
  private get _currentMode(): string | undefined {
    const attrs = this._entity?.attributes;
    if (attrs?.preset_mode) {
      return String(attrs.preset_mode);
    }
    if (attrs?.mode) {
      return String(attrs.mode);
    }

    const select = this._findEntity(['select.mode', 'mode_select']);
    if (select) {
      return select.state;
    }

    return undefined;
  }

  // Get available modes
  private get _availableModes(): string[] {
    const attrs = this._entity?.attributes;
    if (attrs?.preset_modes && Array.isArray(attrs.preset_modes)) {
      return attrs.preset_modes as string[];
    }

    const select = this._findEntity(['select.mode', 'mode_select']);
    if (select?.attributes?.options && Array.isArray(select.attributes.options)) {
      return select.attributes.options as string[];
    }

    return ['Low', 'Medium', 'High', 'Humidity'];
  }

  // Check if device is on
  private get _isOn(): boolean {
    const state = this._entity?.state;
    return state === 'on' || state === 'true';
  }

  // Check if unavailable
  private get _isUnavailable(): boolean {
    const state = this._entity?.state;
    return state === 'unavailable' || state === 'unknown' || !state;
  }

  // Get switches
  private get _switches(): Array<{ id: string; entity: HassEntity; name: string; icon: string }> {
    const switches: Array<{ id: string; entity: HassEntity; name: string; icon: string }> = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(SWITCH_DEFINITIONS)) {
      const entity = this._findEntity([`switch.${key}`, key]);
      if (entity && !foundEntityIds.has(entity.entity_id)) {
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
  private get _sensors(): Array<{ id: string; entity: HassEntity; name: string; icon: string; unit?: string }> {
    const sensors: Array<{ id: string; entity: HassEntity; name: string; icon: string; unit?: string }> = [];
    const foundEntityIds = new Set<string>();

    for (const [key, def] of Object.entries(SENSOR_DEFINITIONS)) {
      // Skip humidity (shown in circle) and temperature (shown separately)
      if (key === 'humidity' || key === 'temperature') continue;

      const entity = this._findEntity([`sensor.${key}`, key]);
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

  // Get water status from main entity attributes or binary sensors
  private get _waterStatus(): { id: string; isOn: boolean; icon: string } | null {
    const attrs = this._entity?.attributes;

    // Check main entity attributes first (priority order)
    // 1. no_water - most critical
    if (attrs?.no_water === true) {
      return { id: 'no_water', isOn: true, icon: 'mdi:water-off' };
    }

    // 2. water_tank_detached
    if (attrs?.water_tank_detached === true) {
      return { id: 'water_tank_detached', isOn: true, icon: 'mdi:cup-off-outline' };
    }

    // 3. water_shortage
    if (attrs?.water_shortage === true) {
      return { id: 'water_shortage', isOn: true, icon: 'mdi:water-alert' };
    }

    // Check binary_sensor entities as fallback
    for (const [key, def] of Object.entries(BINARY_SENSOR_DEFINITIONS)) {
      const entity = this._findEntity([`binary_sensor.${key}`, key]);
      if (entity && entity.state !== 'unavailable') {
        const isOn = entity.state === 'on';
        // Only return if there's a problem (isOn for shortage/no_water, isOff for tank)
        if ((key === 'no_water' || key === 'water_shortage') && isOn) {
          return { id: key, isOn: true, icon: def.icon_on };
        }
        if (key === 'water_tank' && !isOn) {
          return { id: 'water_tank_detached', isOn: true, icon: def.icon_off };
        }
      }
    }

    // Everything is OK - show positive status
    return { id: 'water_ok', isOn: false, icon: 'mdi:water-check' };
  }

  // Handle power toggle
  private async _handlePowerToggle(): Promise<void> {
    if (!this.hass || !this._entity) return;

    const domain = this._entityId.split('.')[0];
    const service = this._isOn ? 'turn_off' : 'turn_on';

    await this.hass.callService(domain, service, {}, { entity_id: this._entityId });
  }

  // Handle mode change
  private async _handleModeChange(mode: string): Promise<void> {
    if (!this.hass) return;

    // Try fan.set_preset_mode first
    const domain = this._entityId.split('.')[0];
    if (domain === 'fan') {
      await this.hass.callService('fan', 'set_preset_mode', {
        preset_mode: mode,
      }, { entity_id: this._entityId });
      return;
    }

    // Try select entity
    const select = this._findEntity(['select.mode', 'mode_select']);
    if (select) {
      await this.hass.callService('select', 'select_option', {
        option: mode,
      }, { entity_id: select.entity_id });
    }
  }

  // Handle target humidity change
  private async _handleTargetHumidityChange(value: number): Promise<void> {
    if (!this.hass) return;

    // Try number entity first
    const number = this._findEntity(['number.target_humidity', 'target_humidity']);
    if (number) {
      await this.hass.callService('number', 'set_value', {
        value: value,
      }, { entity_id: number.entity_id });
      return;
    }

    // Try humidifier service
    await this.hass.callService('humidifier', 'set_humidity', {
      humidity: value,
    }, { entity_id: this._entityId });
  }

  // Handle switch toggle
  private async _handleSwitchToggle(entityId: string, currentState: string): Promise<void> {
    if (!this.hass) return;

    const service = currentState === 'on' ? 'turn_off' : 'turn_on';
    await this.hass.callService('switch', service, {}, { entity_id: entityId });
  }

  protected willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);

    if (changedProps.has('hass')) {
      this._getRelatedEntities();
    }
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const lang = getLanguage(this.hass);

    if (this._isUnavailable) {
      return html`
        <ha-card>
          <div class="unavailable-message">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>${localize('common.unavailable', lang)}</div>
          </div>
        </ha-card>
      `;
    }

    const name = this._config.name || this._entity?.attributes?.friendly_name || 'Humidifier';
    const humidity = this._currentHumidity;
    const targetHumidity = this._targetHumidity;

    return html`
      <ha-card>
        ${this._renderHeader(name, lang)}
        ${this._renderHumidityCircle(humidity, targetHumidity)}
        ${this._config.show_mode ? this._renderModeButtons(lang) : nothing}
        ${this._renderSwitches(lang)}
        ${this._renderSensors()}
        ${this._renderStatusIndicators(lang)}
      </ha-card>
    `;
  }

  private _renderHeader(name: string, lang: string): TemplateResult {
    return html`
      <div class="card-header">
        <div>
          ${this._config.show_name ? html`<div class="name">${name}</div>` : nothing}
          ${this._config.show_state ? html`
            <div class="state">
              ${this._isOn ? localize('common.on', lang) : localize('common.off', lang)}
            </div>
          ` : nothing}
        </div>
        ${this._config.show_power ? html`
          <ha-icon-button
            class="power-button ${this._isOn ? 'on' : ''}"
            @click=${this._handlePowerToggle}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </ha-icon-button>
        ` : nothing}
      </div>
    `;
  }

  // State for dragging
  @state() private _isDragging = false;
  @state() private _tempTarget: number | null = null;

  private _renderHumidityCircle(humidity: number | undefined, target: number | undefined): TemplateResult {
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    // Current humidity progress (blue arc)
    const humidityProgress = humidity !== undefined ? (humidity / 100) * circumference : 0;
    const humidityDashOffset = circumference - humidityProgress;

    // Target humidity - use temp target if dragging, otherwise actual target
    const displayTarget = this._tempTarget !== null ? this._tempTarget : target;

    // Target indicator position (small circle on the arc)
    const targetAngle = displayTarget !== undefined
      ? ((displayTarget / 100) * 360 - 90) * (Math.PI / 180)
      : 0;
    const targetX = displayTarget !== undefined ? 100 + radius * Math.cos(targetAngle) : 0;
    const targetY = displayTarget !== undefined ? 100 + radius * Math.sin(targetAngle) : 0;

    return html`
      <div class="humidity-circle"
        @mousedown=${this._handleDragStart}
        @touchstart=${this._handleDragStart}
        @mousemove=${this._handleDrag}
        @touchmove=${this._handleDrag}
        @mouseup=${this._handleDragEnd}
        @touchend=${this._handleDragEnd}
        @mouseleave=${this._handleDragEnd}
      >
        <svg viewBox="0 0 200 200">
          <!-- Background arc -->
          <circle
            class="arc-background"
            cx="100"
            cy="100"
            r="${radius}"
          />
          <!-- Current humidity arc -->
          <circle
            class="arc-progress"
            cx="100"
            cy="100"
            r="${radius}"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${humidityDashOffset}"
          />
          <!-- Target indicator -->
          ${displayTarget !== undefined && this._config.show_target_humidity ? html`
            <circle
              class="target-indicator ${this._isDragging ? 'dragging' : ''}"
              cx="${targetX}"
              cy="${targetY}"
              r="10"
            />
          ` : nothing}
        </svg>
        <div class="center-content">
          <ha-icon class="humidity-icon" icon="mdi:water-percent"></ha-icon>
          <div class="current-humidity">
            ${humidity !== undefined ? humidity : '--'}
            <span class="humidity-unit">%</span>
          </div>
          ${displayTarget !== undefined && this._config.show_target_humidity ? html`
            <div class="target-humidity ${this._isDragging ? 'dragging' : ''}">
              ${localize('common.target', getLanguage(this.hass))}: ${displayTarget}%
            </div>
          ` : nothing}
        </div>
      </div>
    `;
  }

  private _handleDragStart(e: MouseEvent | TouchEvent): void {
    if (!this._config.show_target_humidity) return;
    this._isDragging = true;
    this._updateTargetFromEvent(e);
  }

  private _handleDrag(e: MouseEvent | TouchEvent): void {
    if (!this._isDragging) return;
    e.preventDefault();
    this._updateTargetFromEvent(e);
  }

  private _handleDragEnd(): void {
    if (!this._isDragging) return;
    this._isDragging = false;
    if (this._tempTarget !== null) {
      this._handleTargetHumidityChange(this._tempTarget);
      this._tempTarget = null;
    }
  }

  private _updateTargetFromEvent(e: MouseEvent | TouchEvent): void {
    const circle = (e.currentTarget as HTMLElement).querySelector('svg');
    if (!circle) return;

    const rect = circle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let clientX: number, clientY: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    // Calculate angle from center
    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    // Convert to degrees and adjust for starting at top
    let degrees = (angle * 180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;

    // Convert to humidity percentage (0-360 -> 0-100)
    let humidity = Math.round(degrees / 360 * 100);
    // Clamp to 30-80 range
    humidity = Math.max(30, Math.min(80, humidity));
    // Round to nearest 5
    humidity = Math.round(humidity / 5) * 5;

    this._tempTarget = humidity;
  }

  private _renderModeButtons(lang: string): TemplateResult {
    const modes = this._availableModes;
    const currentMode = this._currentMode;

    return html`
      <div class="mode-buttons">
        ${modes.map(mode => html`
          <div
            class="mode-button ${currentMode === mode ? 'active' : ''}"
            @click=${() => this._handleModeChange(mode)}
          >
            <ha-icon icon="${this._getModeIcon(mode)}"></ha-icon>
            <span class="mode-name">${localize(`modes.${mode}`, lang) || mode}</span>
          </div>
        `)}
      </div>
    `;
  }

  private _getModeIcon(mode: string): string {
    const icons: { [key: string]: string } = {
      'Low': 'mdi:fan-speed-1',
      'Medium': 'mdi:fan-speed-2',
      'High': 'mdi:fan-speed-3',
      'Humidity': 'mdi:water-percent',
      'Auto': 'mdi:fan-auto',
      'Silent': 'mdi:volume-off',
      'Strong': 'mdi:weather-windy',
    };
    return icons[mode] || 'mdi:fan';
  }

  private _renderSwitches(lang: string): TemplateResult | typeof nothing {
    const switches = this._switches;
    if (switches.length === 0) return nothing;

    return html`
      <div class="switches-row">
        ${switches.map(sw => html`
          <div
            class="switch-item ${sw.entity.state === 'on' ? 'on' : ''}"
            @click=${() => this._handleSwitchToggle(sw.entity.entity_id, sw.entity.state)}
          >
            <ha-icon icon="${sw.icon}"></ha-icon>
            <span class="switch-name">${localize(`switches.${sw.id}`, lang) || sw.name}</span>
          </div>
        `)}
      </div>
    `;
  }

  private _renderSensors(): TemplateResult | typeof nothing {
    const sensors = this._sensors;
    const temp = this._temperature;

    if (sensors.length === 0 && temp === undefined) return nothing;

    return html`
      <div class="sensors-row">
        ${temp !== undefined ? html`
          <div class="sensor-item">
            <ha-icon icon="mdi:thermometer"></ha-icon>
            <span class="sensor-value">${temp}</span>
            <span class="sensor-unit">°C</span>
          </div>
        ` : nothing}
        ${sensors.map(sensor => html`
          <div class="sensor-item">
            <ha-icon icon="${sensor.icon}"></ha-icon>
            <span class="sensor-value">${sensor.entity.state}</span>
            ${sensor.unit ? html`<span class="sensor-unit">${sensor.unit}</span>` : nothing}
          </div>
        `)}
      </div>
    `;
  }

  private _renderStatusIndicators(lang: string): TemplateResult | typeof nothing {
    const waterStatus = this._waterStatus;
    if (!waterStatus) return nothing;

    // Determine status class and translation key
    let statusClass = 'ok';
    let statusKey = 'water_tank_ok';

    if (waterStatus.id === 'no_water') {
      statusClass = 'error';
      statusKey = 'no_water';
    } else if (waterStatus.id === 'water_tank_detached') {
      statusClass = 'warning';
      statusKey = 'water_tank_missing';
    } else if (waterStatus.id === 'water_shortage') {
      statusClass = 'error';
      statusKey = 'water_shortage';
    }

    const translatedText = localize(`status.${statusKey}`, lang);

    return html`
      <div class="status-indicators">
        <div class="status-indicator ${statusClass}">
          <ha-icon icon="${waterStatus.icon}"></ha-icon>
          <span>${translatedText}</span>
        </div>
      </div>
    `;
  }

  // Editor support
  public static getConfigElement(): HTMLElement {
    return document.createElement('xiaomi-humidifier-card-editor');
  }

  public static getStubConfig(): XiaomiHumidifierCardConfig {
    return {
      type: 'custom:xiaomi-humidifier-card',
      entity: '',
    };
  }
}

// Register the custom element
defineCustomElement('xiaomi-humidifier-card', XiaomiHumidifierCard);

declare global {
  interface HTMLElementTagNameMap {
    'xiaomi-humidifier-card': XiaomiHumidifierCard;
  }
}
