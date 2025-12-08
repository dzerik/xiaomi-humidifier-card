import { LitElement, html, PropertyValues, TemplateResult, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
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

// Card info for Home Assistant
const CARD_VERSION = '1.0.0';

console.info(
  `%c XIAOMI-HUMIDIFIER-CARD %c ${CARD_VERSION} `,
  'color: white; background: #03a9f4; font-weight: bold;',
  'color: #03a9f4; background: white; font-weight: bold;'
);

// Register card with Home Assistant
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'xiaomi-humidifier-card',
  name: 'Xiaomi Humidifier Card',
  description: 'Thermostat-style card for Xiaomi humidifiers',
  preview: true,
});

@customElement('xiaomi-humidifier-card')
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
    // First check main entity attributes
    const attrs = this._entity?.attributes;
    if (attrs?.humidity !== undefined) {
      return Number(attrs.humidity);
    }

    // Search for humidity sensor
    const sensor = this._findEntity(['sensor.humidity', 'humidity']);
    if (sensor) {
      return Number(sensor.state);
    }

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

    for (const [key, def] of Object.entries(SWITCH_DEFINITIONS)) {
      const entity = this._findEntity([`switch.${key}`, key]);
      if (entity) {
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

    for (const [key, def] of Object.entries(SENSOR_DEFINITIONS)) {
      // Skip humidity (shown in circle) and already shown values
      if (key === 'humidity') continue;

      const entity = this._findEntity([`sensor.${key}`, key]);
      if (entity && entity.state !== 'unavailable' && entity.state !== 'unknown') {
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

  // Get binary sensors (status indicators)
  private get _binarySensors(): Array<{ id: string; entity: HassEntity; name: string; isOn: boolean; icon: string }> {
    const sensors: Array<{ id: string; entity: HassEntity; name: string; isOn: boolean; icon: string }> = [];

    for (const [key, def] of Object.entries(BINARY_SENSOR_DEFINITIONS)) {
      const entity = this._findEntity([`binary_sensor.${key}`, key]);
      if (entity && entity.state !== 'unavailable') {
        const isOn = entity.state === 'on';
        sensors.push({
          id: key,
          entity,
          name: def.name,
          isOn,
          icon: isOn ? def.icon_on : def.icon_off,
        });
      }
    }

    return sensors;
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
        ${this._config.show_target_humidity ? this._renderTargetSlider(targetHumidity) : nothing}
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

  private _renderHumidityCircle(humidity: number | undefined, target: number | undefined): TemplateResult {
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const progress = humidity !== undefined ? (humidity / 100) * circumference : 0;
    const dashOffset = circumference - progress;

    return html`
      <div class="humidity-circle">
        <svg viewBox="0 0 200 200">
          <circle
            class="arc-background"
            cx="100"
            cy="100"
            r="${radius}"
          />
          <circle
            class="arc-progress"
            cx="100"
            cy="100"
            r="${radius}"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${dashOffset}"
          />
        </svg>
        <div class="center-content">
          <ha-icon class="humidity-icon" icon="mdi:water-percent"></ha-icon>
          <div class="current-humidity">
            ${humidity !== undefined ? humidity : '--'}
            <span class="humidity-unit">%</span>
          </div>
          ${target !== undefined ? html`
            <div class="target-humidity">
              ${localize('common.target', getLanguage(this.hass))}: ${target}%
            </div>
          ` : nothing}
        </div>
      </div>
    `;
  }

  private _renderTargetSlider(target: number | undefined): TemplateResult {
    const value = target ?? 50;

    return html`
      <div class="target-slider">
        <ha-icon-button @click=${() => this._handleTargetHumidityChange(Math.max(30, value - 5))}>
          <ha-icon icon="mdi:minus"></ha-icon>
        </ha-icon-button>
        <input
          type="range"
          min="30"
          max="80"
          step="5"
          .value=${String(value)}
          @change=${(e: Event) => this._handleTargetHumidityChange(Number((e.target as HTMLInputElement).value))}
        />
        <ha-icon-button @click=${() => this._handleTargetHumidityChange(Math.min(80, value + 5))}>
          <ha-icon icon="mdi:plus"></ha-icon>
        </ha-icon-button>
        <span class="value">${value}%</span>
      </div>
    `;
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
    const binarySensors = this._binarySensors;
    if (binarySensors.length === 0) return nothing;

    return html`
      <div class="status-indicators">
        ${binarySensors.map(sensor => {
          let statusClass = 'ok';
          if (sensor.id.includes('shortage') || sensor.id.includes('no_water')) {
            statusClass = sensor.isOn ? 'error' : 'ok';
          } else if (sensor.id === 'water_tank') {
            statusClass = sensor.isOn ? 'ok' : 'warning';
          }

          return html`
            <div class="status-indicator ${statusClass}">
              <ha-icon icon="${sensor.icon}"></ha-icon>
              <span>${localize(`status.${sensor.id}${sensor.isOn ? '' : '_missing'}`, lang) || sensor.name}</span>
            </div>
          `;
        })}
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

declare global {
  interface HTMLElementTagNameMap {
    'xiaomi-humidifier-card': XiaomiHumidifierCard;
  }
}
