import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { localize, getLanguage } from '../localize/localize';
import { HomeAssistant } from '../types';

export class HumidityCircle extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ type: Number }) public humidity?: number;
  @property({ type: Number }) public targetHumidity?: number;
  @property({ type: Boolean }) public showTarget = true;
  @property({ attribute: false }) public onTargetChange?: (value: number) => void;

  @state() private _isDragging = false;
  @state() private _tempTarget: number | null = null;

  static styles = css`
    :host {
      display: block;
    }

    .humidity-circle {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 0 auto 16px;
      cursor: pointer;
      touch-action: none;
    }

    .humidity-circle svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    .arc-background {
      fill: none;
      stroke: var(--disabled-text-color, #e0e0e0);
      stroke-width: 8;
      stroke-linecap: round;
    }

    .arc-progress {
      fill: none;
      stroke: var(--primary-color, #03a9f4);
      stroke-width: 8;
      stroke-linecap: round;
      transition: stroke-dashoffset 0.3s ease;
    }

    .target-indicator {
      fill: var(--primary-color, #03a9f4);
      stroke: var(--ha-card-background, var(--card-background-color, #fff));
      stroke-width: 3;
      cursor: grab;
      transition: r 0.2s ease, fill 0.2s ease;
      transform-origin: center;
    }

    .target-indicator:hover {
      r: 12;
    }

    .target-indicator.dragging {
      r: 14;
      fill: var(--secondary-color, #4fc3f7);
      cursor: grabbing;
    }

    .center-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    .humidity-icon {
      font-size: 1.5em;
      color: var(--primary-color, #03a9f4);
      margin-bottom: 4px;
    }

    .current-humidity {
      font-size: 2.5em;
      font-weight: 500;
      color: var(--primary-text-color, #212121);
      line-height: 1;
    }

    .humidity-unit {
      font-size: 0.8em;
      color: var(--secondary-text-color, #727272);
    }

    .target-humidity {
      font-size: 1em;
      color: var(--secondary-text-color, #727272);
      margin-top: 4px;
    }

    .target-humidity.dragging {
      color: var(--primary-color, #03a9f4);
      font-weight: 500;
    }

    @media (max-width: 400px) {
      .humidity-circle {
        width: 160px;
        height: 160px;
      }

      .current-humidity {
        font-size: 2em;
      }
    }

    @media (min-width: 600px) {
      .humidity-circle {
        width: 240px;
        height: 240px;
      }

      .current-humidity {
        font-size: 3em;
      }
    }
  `;

  protected render(): TemplateResult {
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    const humidityProgress = this.humidity !== undefined ? (this.humidity / 100) * circumference : 0;
    const humidityDashOffset = circumference - humidityProgress;

    const displayTarget = this._tempTarget !== null ? this._tempTarget : this.targetHumidity;

    const targetAngle = displayTarget !== undefined
      ? ((displayTarget / 100) * 360 - 90) * (Math.PI / 180)
      : 0;
    const targetX = displayTarget !== undefined ? 100 + radius * Math.cos(targetAngle) : 0;
    const targetY = displayTarget !== undefined ? 100 + radius * Math.sin(targetAngle) : 0;

    const lang = getLanguage(this.hass);

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
          <circle class="arc-background" cx="100" cy="100" r="${radius}" />
          <circle
            class="arc-progress"
            cx="100"
            cy="100"
            r="${radius}"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${humidityDashOffset}"
          />
          ${displayTarget !== undefined && this.showTarget ? html`
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
            ${this.humidity !== undefined ? this.humidity : '--'}
            <span class="humidity-unit">%</span>
          </div>
          ${displayTarget !== undefined && this.showTarget ? html`
            <div class="target-humidity ${this._isDragging ? 'dragging' : ''}">
              ${localize('common.target', lang)}: ${displayTarget}%
            </div>
          ` : nothing}
        </div>
      </div>
    `;
  }

  private _handleDragStart(e: MouseEvent | TouchEvent): void {
    if (!this.showTarget || !this.onTargetChange) return;
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
    if (this._tempTarget !== null && this.onTargetChange) {
      this.onTargetChange(this._tempTarget);
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

    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    let degrees = (angle * 180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;

    let humidity = Math.round(degrees / 360 * 100);
    humidity = Math.max(30, Math.min(80, humidity));
    humidity = Math.round(humidity / 5) * 5;

    this._tempTarget = humidity;
  }
}

// Register component
if (!customElements.get('humidity-circle')) {
  customElements.define('humidity-circle', HumidityCircle);
}

declare global {
  interface HTMLElementTagNameMap {
    'humidity-circle': HumidityCircle;
  }
}
