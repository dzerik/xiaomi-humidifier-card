import { html, TemplateResult, nothing } from 'lit';
import { localize } from '../localize/localize';
import { SwitchInfo, SensorInfo, NumberInfo, SelectInfo, ButtonInfo, WaterStatus } from '../utils/entity-finder';

/**
 * Render switches row
 */
export function renderSwitches(
  switches: SwitchInfo[],
  lang: string,
  onToggle: (entityId: string, currentState: string) => void
): TemplateResult | typeof nothing {
  if (switches.length === 0) return nothing;

  return html`
    <div class="switches-row">
      ${switches.map(sw => html`
        <div
          class="switch-item ${sw.entity.state === 'on' ? 'on' : ''}"
          @click=${() => onToggle(sw.entity.entity_id, sw.entity.state)}
        >
          <ha-icon icon="${sw.icon}"></ha-icon>
          <span class="switch-name">${localize(`switches.${sw.id}`, lang) || sw.name}</span>
        </div>
      `)}
    </div>
  `;
}

/**
 * Render sensors row
 */
export function renderSensors(
  sensors: SensorInfo[],
  temperature?: number
): TemplateResult | typeof nothing {
  if (sensors.length === 0 && temperature === undefined) return nothing;

  return html`
    <div class="sensors-row">
      ${temperature !== undefined ? html`
        <div class="sensor-item">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          <span class="sensor-value">${temperature}</span>
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

/**
 * Render numbers row (sliders)
 */
export function renderNumbers(
  numbers: NumberInfo[],
  lang: string,
  onChange: (entityId: string, value: number) => void
): TemplateResult | typeof nothing {
  if (numbers.length === 0) return nothing;

  return html`
    <div class="numbers-row">
      ${numbers.map(num => html`
        <div class="number-item">
          <div class="number-header">
            <span class="number-name">
              <ha-icon icon="${num.icon}"></ha-icon>
              ${localize(`numbers.${num.id}`, lang) || num.name}
            </span>
            <span class="number-value">${num.entity.state}${num.unit || ''}</span>
          </div>
          <div class="number-control">
            <input
              type="range"
              min="${num.min}"
              max="${num.max}"
              step="${num.step}"
              .value="${num.entity.state}"
              @change=${(e: Event) => onChange(num.entity.entity_id, Number((e.target as HTMLInputElement).value))}
            />
          </div>
        </div>
      `)}
    </div>
  `;
}

/**
 * Render selects row (dropdowns)
 */
export function renderSelects(
  selects: SelectInfo[],
  lang: string,
  onChange: (entityId: string, option: string) => void
): TemplateResult | typeof nothing {
  if (selects.length === 0) return nothing;

  return html`
    <div class="selects-row">
      ${selects.map(sel => html`
        <div class="select-item">
          <div class="select-header">
            <ha-icon icon="${sel.icon}"></ha-icon>
            <span class="select-name">${localize(`selects.${sel.id}`, lang) || sel.name}</span>
          </div>
          <select
            .value="${sel.entity.state}"
            @change=${(e: Event) => onChange(sel.entity.entity_id, (e.target as HTMLSelectElement).value)}
          >
            ${sel.options.map(opt => html`
              <option value="${opt}" ?selected=${opt === sel.entity.state}>
                ${localize(`select_options.${opt}`, lang) || opt}
              </option>
            `)}
          </select>
        </div>
      `)}
    </div>
  `;
}

/**
 * Render buttons row (action buttons)
 */
export function renderButtons(
  buttons: ButtonInfo[],
  lang: string,
  onPress: (entityId: string) => void
): TemplateResult | typeof nothing {
  if (buttons.length === 0) return nothing;

  return html`
    <div class="buttons-row">
      ${buttons.map(btn => html`
        <div
          class="button-item"
          @click=${() => onPress(btn.entity.entity_id)}
        >
          <ha-icon icon="${btn.icon}"></ha-icon>
          <span class="button-name">${localize(`buttons.${btn.id}`, lang) || btn.name}</span>
        </div>
      `)}
    </div>
  `;
}

/**
 * Render status indicators
 */
export function renderStatusIndicators(
  waterStatus: WaterStatus | null,
  lang: string
): TemplateResult | typeof nothing {
  if (!waterStatus) return nothing;

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

/**
 * Render card header
 */
export function renderHeader(
  name: string,
  isOn: boolean,
  showName: boolean,
  showState: boolean,
  showPower: boolean,
  lang: string,
  onPowerToggle: () => void
): TemplateResult {
  return html`
    <div class="card-header">
      <div>
        ${showName ? html`<div class="name">${name}</div>` : nothing}
        ${showState ? html`
          <div class="state">
            ${isOn ? localize('common.on', lang) : localize('common.off', lang)}
          </div>
        ` : nothing}
      </div>
      ${showPower ? html`
        <ha-icon-button
          class="power-button ${isOn ? 'on' : ''}"
          @click=${onPowerToggle}
        >
          <ha-icon icon="mdi:power"></ha-icon>
        </ha-icon-button>
      ` : nothing}
    </div>
  `;
}
