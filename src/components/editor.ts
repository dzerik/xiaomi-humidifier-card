import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, XiaomiHumidifierCardConfig } from '../types';
import { localize, getLanguage } from '../localize/localize';

@customElement('xiaomi-humidifier-card-editor')
export class XiaomiHumidifierCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: XiaomiHumidifierCardConfig;

  static styles = css`
    .form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .row label {
      font-weight: 500;
      font-size: 0.9em;
      color: var(--primary-text-color);
    }

    .row input[type="text"],
    .row select {
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      font-size: 1em;
      background: var(--card-background-color);
      color: var(--primary-text-color);
    }

    .checkbox-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .checkbox-row input[type="checkbox"] {
      width: 18px;
      height: 18px;
    }

    .section-title {
      font-weight: 600;
      margin-top: 16px;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }
  `;

  public setConfig(config: XiaomiHumidifierCardConfig): void {
    this._config = config;
  }

  private _valueChanged(ev: Event): void {
    if (!this._config || !this.hass) return;

    const target = ev.target as HTMLInputElement | HTMLSelectElement;
    const configKey = target.dataset.configKey;

    if (!configKey) return;

    let value: string | boolean = target.value;
    if (target.type === 'checkbox') {
      value = (target as HTMLInputElement).checked;
    }

    const newConfig = {
      ...this._config,
      [configKey]: value,
    };

    const event = new CustomEvent('config-changed', {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private _getEntities(domain: string): string[] {
    if (!this.hass) return [];

    return Object.keys(this.hass.states)
      .filter(entityId => entityId.startsWith(`${domain}.`))
      .sort();
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    const lang = getLanguage(this.hass);
    const fanEntities = this._getEntities('fan');
    const humidifierEntities = this._getEntities('humidifier');
    const allEntities = [...fanEntities, ...humidifierEntities].sort();

    return html`
      <div class="form">
        <div class="row">
          <label>${localize('editor.entity', lang)}</label>
          <select
            data-config-key="entity"
            .value=${this._config.entity || ''}
            @change=${this._valueChanged}
          >
            <option value="">-- Select entity --</option>
            ${allEntities.map(entity => html`
              <option value="${entity}" ?selected=${entity === this._config.entity}>
                ${this.hass.states[entity]?.attributes?.friendly_name || entity}
              </option>
            `)}
          </select>
        </div>

        <div class="row">
          <label>${localize('editor.name', lang)}</label>
          <input
            type="text"
            data-config-key="name"
            .value=${this._config.name || ''}
            @input=${this._valueChanged}
          />
        </div>

        <div class="section-title">Display Options</div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_name"
            data-config-key="show_name"
            .checked=${this._config.show_name !== false}
            @change=${this._valueChanged}
          />
          <label for="show_name">${localize('editor.show_name', lang)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_state"
            data-config-key="show_state"
            .checked=${this._config.show_state !== false}
            @change=${this._valueChanged}
          />
          <label for="show_state">${localize('editor.show_state', lang)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_target_humidity"
            data-config-key="show_target_humidity"
            .checked=${this._config.show_target_humidity !== false}
            @change=${this._valueChanged}
          />
          <label for="show_target_humidity">${localize('editor.show_target_humidity', lang)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_mode"
            data-config-key="show_mode"
            .checked=${this._config.show_mode !== false}
            @change=${this._valueChanged}
          />
          <label for="show_mode">${localize('editor.show_mode', lang)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="compact"
            data-config-key="compact"
            .checked=${this._config.compact === true}
            @change=${this._valueChanged}
          />
          <label for="compact">${localize('editor.compact', lang)}</label>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'xiaomi-humidifier-card-editor': XiaomiHumidifierCardEditor;
  }
}
