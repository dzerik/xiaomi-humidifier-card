import { LitElement, html, PropertyValues, TemplateResult, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { styles } from './styles';
import { localize, getLanguage } from './localize/localize';
import { HomeAssistant, XiaomiHumidifierCardConfig } from './types';
import { EntityFinder } from './utils/entity-finder';
import {
  renderHeader,
  renderSensors,
  renderNumbers,
  renderSelects,
  renderButtons,
} from './components/entity-rows';

// Import components to register them
import './components/editor';
import './components/humidity-circle';
import './components/mode-buttons';

// Card version
const CARD_VERSION = '2.2.0';

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

export class XiaomiHumidifierCard extends LitElement {
  static styles = styles;

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: XiaomiHumidifierCardConfig;

  private _entityFinder?: EntityFinder;

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
      show_sensors: true,
      show_switches: true,
      show_numbers: true,
      show_selects: true,
      show_buttons: true,
      compact: false,
      ...config,
    };
  }

  public getCardSize(): number {
    return this._config?.compact ? 3 : 5;
  }

  protected willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);

    if (changedProps.has('hass') && this.hass && this._config) {
      this._entityFinder = new EntityFinder(this.hass, this._config);
    }
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass || !this._entityFinder) {
      return html``;
    }

    const lang = getLanguage(this.hass);
    const ef = this._entityFinder;

    if (ef.isUnavailable()) {
      return html`
        <ha-card>
          <div class="unavailable-message">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>${localize('common.unavailable', lang)}</div>
          </div>
        </ha-card>
      `;
    }

    const name = this._config.name || (ef.entity?.attributes?.friendly_name as string) || 'Humidifier';
    const humidity = ef.getCurrentHumidity();
    const targetHumidity = ef.getTargetHumidity();
    const temperature = ef.getTemperature();
    const isOn = ef.isOn();

    return html`
      <ha-card>
        ${renderHeader(
          name,
          isOn,
          this._config.show_name !== false,
          this._config.show_state !== false,
          this._config.show_power !== false,
          lang,
          () => this._handlePowerToggle(),
          ef.getSwitches(),
          this._config.show_switches !== false,
          (id, state) => this._handleSwitchToggle(id, state),
          ef.getWaterStatus(),
        )}

        <humidity-circle
          .hass=${this.hass}
          .humidity=${humidity}
          .targetHumidity=${targetHumidity}
          .showTarget=${this._config.show_target_humidity !== false}
          .isOn=${isOn}
          .onTargetChange=${(value: number) => this._handleTargetHumidityChange(value)}
        ></humidity-circle>

        ${this._config.show_mode ? html`
          <mode-buttons
            .modes=${ef.getAvailableModes()}
            .currentMode=${ef.getCurrentMode()}
            .lang=${lang}
            .onModeChange=${(mode: string) => this._handleModeChange(mode)}
          ></mode-buttons>
        ` : nothing}

        ${renderNumbers(ef.getNumbers(), lang, (id, value) => this._handleNumberChange(id, value))}
        ${renderSelects(ef.getSelects(), lang, (id, option) => this._handleSelectChange(id, option))}
        ${renderButtons(ef.getButtons(), lang, (id) => this._handleButtonPress(id))}
        ${renderSensors(ef.getSensors(), temperature)}
      </ha-card>
    `;
  }

  // Event handlers
  private async _handlePowerToggle(): Promise<void> {
    if (!this.hass || !this._entityFinder) return;

    const entityId = this._entityFinder.entityId;
    const domain = entityId.split('.')[0];
    const service = this._entityFinder.isOn() ? 'turn_off' : 'turn_on';

    await this.hass.callService(domain, service, {}, { entity_id: entityId });
  }

  private async _handleModeChange(mode: string): Promise<void> {
    if (!this.hass || !this._entityFinder) return;

    const entityId = this._entityFinder.entityId;
    const domain = entityId.split('.')[0];

    if (domain === 'fan') {
      await this.hass.callService('fan', 'set_preset_mode', {
        preset_mode: mode,
      }, { entity_id: entityId });
      return;
    }

    const select = this._entityFinder.findEntity(['select.mode', 'mode_select']);
    if (select) {
      await this.hass.callService('select', 'select_option', {
        option: mode,
      }, { entity_id: select.entity_id });
    }
  }

  private async _handleTargetHumidityChange(value: number): Promise<void> {
    if (!this.hass || !this._entityFinder) return;

    const number = this._entityFinder.findEntity(['number.target_humidity', 'target_humidity']);
    if (number) {
      await this.hass.callService('number', 'set_value', {
        value: value,
      }, { entity_id: number.entity_id });
      return;
    }

    await this.hass.callService('humidifier', 'set_humidity', {
      humidity: value,
    }, { entity_id: this._entityFinder.entityId });
  }

  private async _handleSwitchToggle(entityId: string, currentState: string): Promise<void> {
    if (!this.hass) return;

    const service = currentState === 'on' ? 'turn_off' : 'turn_on';
    await this.hass.callService('switch', service, {}, { entity_id: entityId });
  }

  private async _handleNumberChange(entityId: string, value: number): Promise<void> {
    if (!this.hass) return;

    await this.hass.callService('number', 'set_value', {
      value: value,
    }, { entity_id: entityId });
  }

  private async _handleSelectChange(entityId: string, option: string): Promise<void> {
    if (!this.hass) return;

    await this.hass.callService('select', 'select_option', {
      option: option,
    }, { entity_id: entityId });
  }

  private async _handleButtonPress(entityId: string): Promise<void> {
    if (!this.hass) return;

    await this.hass.callService('button', 'press', {}, { entity_id: entityId });
  }

  // Static methods for Home Assistant
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

// Register custom element
if (!customElements.get('xiaomi-humidifier-card')) {
  customElements.define('xiaomi-humidifier-card', XiaomiHumidifierCard);
}

declare global {
  interface HTMLElementTagNameMap {
    'xiaomi-humidifier-card': XiaomiHumidifierCard;
  }
}
