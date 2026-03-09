import { LitElement, html, svg, css, TemplateResult, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { localize, getLanguage } from '../localize/localize';
import { HomeAssistant } from '../types';

// Arc geometry constants
const SVG_SIZE = 200;
const CENTER = SVG_SIZE / 2;
const RADIUS = 78;
const STROKE_WIDTH = 10;
const STROKE_BG = 6;
const START_ANGLE = 135;   // 7:30 position (degrees)
const END_ANGLE = 405;     // 4:30 position (degrees)
const ARC_SPAN = END_ANGLE - START_ANGLE; // 270°
const MIN_HUMIDITY = 30;
const MAX_HUMIDITY = 80;
const STEP = 5;

// Thumb geometry
const THUMB_R = 10;
const THUMB_R_HOVER = 12;
const THUMB_R_DRAG = 13;

// Current marker
const MARKER_R = 5;

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function polarToCartesian(angle: number): { x: number; y: number } {
  const rad = degToRad(angle);
  return {
    x: CENTER + RADIUS * Math.cos(rad),
    y: CENTER + RADIUS * Math.sin(rad),
  };
}

function describeArc(startAngle: number, endAngle: number): string {
  const start = polarToCartesian(startAngle);
  const end = polarToCartesian(endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function valueToAngle(value: number): number {
  const clamped = Math.max(MIN_HUMIDITY, Math.min(MAX_HUMIDITY, value));
  return START_ANGLE + ((clamped - MIN_HUMIDITY) / (MAX_HUMIDITY - MIN_HUMIDITY)) * ARC_SPAN;
}

function angleToValue(angle: number): number {
  let normalizedAngle = angle;
  // Handle wrap-around
  if (normalizedAngle < START_ANGLE) normalizedAngle += 360;
  if (normalizedAngle > END_ANGLE) {
    // Snap to closest end
    const distToStart = Math.abs(normalizedAngle - START_ANGLE);
    const distToEnd = Math.abs(normalizedAngle - END_ANGLE);
    normalizedAngle = distToStart < distToEnd ? START_ANGLE : END_ANGLE;
  }
  const ratio = (normalizedAngle - START_ANGLE) / ARC_SPAN;
  const raw = MIN_HUMIDITY + ratio * (MAX_HUMIDITY - MIN_HUMIDITY);
  return Math.round(raw / STEP) * STEP;
}

/** Get arc color based on humidity value */
function getHumidityColor(value: number): string {
  if (value < 35) return '#FF6B35';  // dry — orange
  if (value < 45) return '#FFC233';  // slightly dry — yellow
  if (value < 55) return '#4CAF50';  // comfort — green
  if (value < 65) return '#29B6F6';  // humid — light blue
  return '#1565C0';                   // very humid — blue
}

/** Interpolated color for smoother transitions */
function getHumidityColorSmooth(value: number): string {
  const stops: [number, number, number, number][] = [
    // [value, r, g, b]
    [30, 255, 107, 53],   // orange
    [40, 255, 194, 51],   // yellow
    [50, 76, 175, 80],    // green
    [60, 41, 182, 246],   // light blue
    [70, 21, 101, 192],   // blue
    [80, 21, 101, 192],   // blue
  ];

  const clamped = Math.max(30, Math.min(80, value));

  for (let i = 0; i < stops.length - 1; i++) {
    if (clamped >= stops[i][0] && clamped <= stops[i + 1][0]) {
      const t = (clamped - stops[i][0]) / (stops[i + 1][0] - stops[i][0]);
      const r = Math.round(stops[i][1] + t * (stops[i + 1][1] - stops[i][1]));
      const g = Math.round(stops[i][2] + t * (stops[i + 1][2] - stops[i][2]));
      const b = Math.round(stops[i][3] + t * (stops[i + 1][3] - stops[i][3]));
      return `rgb(${r}, ${g}, ${b})`;
    }
  }
  return getHumidityColor(clamped);
}

export class HumidityCircle extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ type: Number }) public humidity?: number;
  @property({ type: Number }) public targetHumidity?: number;
  @property({ type: Boolean }) public showTarget = true;
  @property({ type: Boolean }) public isOn = true;
  @property({ attribute: false }) public onTargetChange?: (value: number) => void;

  @state() private _isDragging = false;
  @state() private _tempTarget: number | null = null;

  // Long-press repeat for +/- buttons
  private _repeatTimer?: ReturnType<typeof setInterval>;
  private _repeatDelay = 400;

  static styles = css`
    :host {
      display: block;
    }

    .circle-container {
      position: relative;
      width: 220px;
      height: 220px;
      margin: 8px auto 16px;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
    }

    .circle-container svg {
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    /* Background arc */
    .arc-bg {
      fill: none;
      stroke: var(--disabled-text-color, rgba(255, 255, 255, 0.1));
      stroke-width: ${STROKE_BG};
      stroke-linecap: round;
      opacity: 0.3;
    }

    /* Progress arc */
    .arc-progress {
      fill: none;
      stroke-width: ${STROKE_WIDTH};
      stroke-linecap: round;
      transition: d 0.6s ease, stroke 0.5s ease;
      filter: drop-shadow(0 0 4px var(--arc-glow, rgba(3, 169, 244, 0.3)));
    }

    .arc-progress.dragging {
      transition: stroke 0.3s ease;
    }

    /* Tick marks */
    .tick {
      stroke: var(--secondary-text-color, rgba(255, 255, 255, 0.3));
      stroke-width: 1;
      opacity: 0.3;
    }

    .tick-label {
      font-size: 9px;
      fill: var(--secondary-text-color, rgba(255, 255, 255, 0.4));
      text-anchor: middle;
      dominant-baseline: central;
    }

    /* Current humidity marker */
    .current-marker {
      fill: var(--primary-text-color, #fff);
      stroke: var(--ha-card-background, var(--card-background-color, #111));
      stroke-width: 2;
      transition: cx 0.8s ease, cy 0.8s ease;
    }

    @keyframes pulse-marker {
      0%, 100% { opacity: 0.7; r: ${MARKER_R}; }
      50% { opacity: 1; r: ${MARKER_R + 1.5}; }
    }

    .current-marker-glow {
      fill: var(--primary-text-color, #fff);
      opacity: 0.3;
      animation: pulse-marker 2s ease-in-out infinite;
    }

    /* Thumb (target indicator) */
    .thumb {
      fill: #fff;
      stroke: var(--ha-card-background, var(--card-background-color, #111));
      stroke-width: 3;
      cursor: grab;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
      transition: r 0.15s ease, filter 0.15s ease;
    }

    .thumb:hover {
      r: ${THUMB_R_HOVER};
    }

    .thumb.dragging {
      r: ${THUMB_R_DRAG};
      cursor: grabbing;
      filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.4))
              drop-shadow(0 0 12px var(--arc-glow, rgba(3, 169, 244, 0.4)));
    }

    /* Target ring behind thumb */
    .thumb-ring {
      fill: none;
      stroke-width: 2;
      opacity: 0;
      transition: opacity 0.15s ease;
    }

    .thumb:hover ~ .thumb-ring,
    .thumb.dragging ~ .thumb-ring {
      opacity: 0.3;
    }

    /* Center content */
    .center-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      pointer-events: none;
    }

    .status-text {
      font-size: 0.8em;
      font-weight: 400;
      color: var(--secondary-text-color, #aaa);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 2px;
      transition: color 0.3s ease, opacity 0.3s ease;
    }

    .target-value {
      font-size: 3.2em;
      font-weight: 300;
      line-height: 1;
      color: var(--primary-text-color, #fff);
      transition: color 0.3s ease;
    }

    .target-unit {
      font-size: 0.35em;
      font-weight: 400;
      color: var(--secondary-text-color, #aaa);
      vertical-align: super;
    }

    .current-value {
      font-size: 0.85em;
      color: var(--secondary-text-color, #aaa);
      margin-top: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      transition: color 0.3s ease;
    }

    .current-value ha-icon {
      --mdc-icon-size: 16px;
    }

    /* +/- buttons */
    .adjust-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-top: 8px;
      pointer-events: auto;
    }

    .adjust-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1.5px solid var(--divider-color, rgba(255, 255, 255, 0.2));
      background: transparent;
      color: var(--primary-text-color, #fff);
      font-size: 1.4em;
      font-weight: 300;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      -webkit-user-select: none;
    }

    .adjust-btn:hover {
      border-color: var(--primary-color, #03a9f4);
      background: rgba(3, 169, 244, 0.1);
    }

    .adjust-btn:active {
      transform: scale(0.9);
      background: rgba(3, 169, 244, 0.2);
    }

    /* Off state */
    .circle-container.off .arc-progress,
    .circle-container.off .current-marker,
    .circle-container.off .current-marker-glow,
    .circle-container.off .thumb {
      opacity: 0.15;
      transition: opacity 0.5s ease;
    }

    .circle-container.off .target-value {
      color: var(--disabled-text-color, #666);
    }

    .circle-container.off .status-text {
      color: var(--disabled-text-color, #666);
    }

    /* Dragging state — highlight target value */
    .target-value.dragging {
      color: var(--primary-color, #03a9f4);
      transition: color 0.1s ease;
    }

    /* Responsive */
    @media (max-width: 400px) {
      .circle-container {
        width: 180px;
        height: 180px;
      }

      .target-value {
        font-size: 2.6em;
      }

      .adjust-btn {
        width: 34px;
        height: 34px;
        font-size: 1.2em;
      }
    }

    @media (min-width: 600px) {
      .circle-container {
        width: 260px;
        height: 260px;
      }

      .target-value {
        font-size: 3.8em;
      }
    }
  `;

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._stopRepeat();
  }

  protected render(): TemplateResult {
    const lang = getLanguage(this.hass);
    const displayTarget = this._tempTarget ?? this.targetHumidity;
    const hasTarget = displayTarget !== undefined;
    const hasCurrent = this.humidity !== undefined;

    // Arc paths
    const bgArc = describeArc(START_ANGLE, END_ANGLE);

    // Progress arc (target humidity)
    const targetAngle = hasTarget ? valueToAngle(displayTarget!) : START_ANGLE;
    const progressArc = hasTarget && targetAngle > START_ANGLE
      ? describeArc(START_ANGLE, targetAngle)
      : '';

    // Thumb position
    const thumbPos = hasTarget ? polarToCartesian(targetAngle) : null;

    // Current humidity marker position
    const currentAngle = hasCurrent ? valueToAngle(this.humidity!) : 0;
    const currentPos = hasCurrent ? polarToCartesian(currentAngle) : null;

    // Color
    const arcColor = hasTarget
      ? getHumidityColorSmooth(displayTarget!)
      : 'var(--primary-color, #03a9f4)';

    // Status text
    const statusText = this.isOn
      ? (this._isDragging
          ? localize('common.target', lang)
          : (this._getModeName(lang) || localize('common.on', lang)))
      : localize('common.off', lang);

    // Tick marks at major values
    const ticks = [30, 40, 50, 60, 70, 80];

    return html`
      <div
        class="circle-container ${this.isOn ? '' : 'off'}"
        @mousedown=${this._handleInteractionStart}
        @touchstart=${this._handleInteractionStart}
      >
        <svg viewBox="0 0 ${SVG_SIZE} ${SVG_SIZE}">
          <!-- Background arc -->
          ${svg`<path class="arc-bg" d="${bgArc}" />`}

          <!-- Tick marks -->
          ${ticks.map(val => {
            const angle = valueToAngle(val);
            const inner = this._polarAtRadius(angle, RADIUS - 16);
            const outer = this._polarAtRadius(angle, RADIUS - 10);
            const label = this._polarAtRadius(angle, RADIUS - 24);
            return svg`
              <line class="tick" x1="${inner.x}" y1="${inner.y}" x2="${outer.x}" y2="${outer.y}" />
              <text class="tick-label" x="${label.x}" y="${label.y}">${val}</text>
            `;
          })}

          <!-- Progress arc -->
          ${progressArc ? svg`
            <path
              class="arc-progress ${this._isDragging ? 'dragging' : ''}"
              d="${progressArc}"
              stroke="${arcColor}"
              style="--arc-glow: ${arcColor}40"
            />
          ` : nothing}

          <!-- Current humidity marker -->
          ${hasCurrent && this.isOn && currentPos ? svg`
            <circle
              class="current-marker-glow"
              cx="${currentPos.x}"
              cy="${currentPos.y}"
              r="${MARKER_R + 2}"
            />
            <circle
              class="current-marker"
              cx="${currentPos.x}"
              cy="${currentPos.y}"
              r="${MARKER_R}"
            />
          ` : nothing}

          <!-- Thumb -->
          ${hasTarget && this.showTarget && thumbPos ? svg`
            <circle
              class="thumb ${this._isDragging ? 'dragging' : ''}"
              cx="${thumbPos.x}"
              cy="${thumbPos.y}"
              r="${THUMB_R}"
            />
          ` : nothing}
        </svg>

        <div class="center-content">
          <div class="status-text">${statusText}</div>
          <div class="target-value ${this._isDragging ? 'dragging' : ''}">
            ${hasTarget ? displayTarget : '--'}
            <span class="target-unit">%</span>
          </div>
          ${hasCurrent ? html`
            <div class="current-value">
              <ha-icon icon="mdi:water"></ha-icon>
              ${this.humidity}%
            </div>
          ` : nothing}
          ${hasTarget && this.showTarget ? html`
            <div class="adjust-buttons">
              <button
                class="adjust-btn"
                @click=${this._handleDecrement}
                @mousedown=${this._startDecrementRepeat}
                @mouseup=${this._stopRepeat}
                @mouseleave=${this._stopRepeat}
                @touchstart=${this._startDecrementRepeat}
                @touchend=${this._stopRepeat}
              >−</button>
              <button
                class="adjust-btn"
                @click=${this._handleIncrement}
                @mousedown=${this._startIncrementRepeat}
                @mouseup=${this._stopRepeat}
                @mouseleave=${this._stopRepeat}
                @touchstart=${this._startIncrementRepeat}
                @touchend=${this._stopRepeat}
              >+</button>
            </div>
          ` : nothing}
        </div>
      </div>
    `;
  }

  private _polarAtRadius(angle: number, r: number): { x: number; y: number } {
    const rad = degToRad(angle);
    return {
      x: CENTER + r * Math.cos(rad),
      y: CENTER + r * Math.sin(rad),
    };
  }

  private _getModeName(_lang: string): string {
    // Can be extended to show current mode name
    return '';
  }

  // --- Drag handling ---

  private _handleInteractionStart = (e: MouseEvent | TouchEvent): void => {
    if (!this.showTarget || !this.onTargetChange || !this.isOn) return;

    // Don't start drag if clicking +/- buttons
    const target = e.target as HTMLElement;
    if (target.closest('.adjust-btn') || target.closest('.adjust-buttons')) return;

    this._isDragging = true;
    this._updateTargetFromEvent(e);

    // Add global listeners for drag
    const onMove = (ev: MouseEvent | TouchEvent) => {
      if (!this._isDragging) return;
      ev.preventDefault();
      this._updateTargetFromEvent(ev);
    };
    const onEnd = () => {
      if (!this._isDragging) return;
      this._isDragging = false;
      if (this._tempTarget !== null && this.onTargetChange) {
        this.onTargetChange(this._tempTarget);
        this._tempTarget = null;
      }
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };

    window.addEventListener('mousemove', onMove, { passive: false });
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);
  };

  private _updateTargetFromEvent(e: MouseEvent | TouchEvent): void {
    const svgEl = this.renderRoot.querySelector('svg');
    if (!svgEl) return;

    const rect = svgEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let clientX: number, clientY: number;
    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      return;
    }

    // Calculate angle from center (0° = right, clockwise)
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (angle < 0) angle += 360;

    // Convert to value
    const value = angleToValue(angle);
    const clamped = Math.max(MIN_HUMIDITY, Math.min(MAX_HUMIDITY, value));
    this._tempTarget = clamped;
  }

  // --- +/- buttons ---

  private _handleIncrement = (e: Event): void => {
    e.stopPropagation();
    this._adjustTarget(STEP);
  };

  private _handleDecrement = (e: Event): void => {
    e.stopPropagation();
    this._adjustTarget(-STEP);
  };

  private _adjustTarget(delta: number): void {
    if (!this.onTargetChange || !this.isOn) return;
    const current = this.targetHumidity ?? 50;
    const newVal = Math.max(MIN_HUMIDITY, Math.min(MAX_HUMIDITY, current + delta));
    if (newVal !== current) {
      this.onTargetChange(newVal);
    }
  }

  private _startIncrementRepeat = (e: Event): void => {
    e.preventDefault();
    e.stopPropagation();
    this._stopRepeat();
    this._repeatTimer = setInterval(() => this._adjustTarget(STEP), this._repeatDelay);
  };

  private _startDecrementRepeat = (e: Event): void => {
    e.preventDefault();
    e.stopPropagation();
    this._stopRepeat();
    this._repeatTimer = setInterval(() => this._adjustTarget(-STEP), this._repeatDelay);
  };

  private _stopRepeat = (): void => {
    if (this._repeatTimer) {
      clearInterval(this._repeatTimer);
      this._repeatTimer = undefined;
    }
  };
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
