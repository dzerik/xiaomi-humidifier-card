import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { localize } from '../localize/localize';

const MODE_ICONS: { [key: string]: string } = {
  'Low': 'mdi:fan-speed-1',
  'Mid': 'mdi:fan-speed-2',
  'Medium': 'mdi:fan-speed-2',
  'High': 'mdi:fan-speed-3',
  'Humidity': 'mdi:water-percent',
  'Auto': 'mdi:fan-auto',
  'Silent': 'mdi:volume-off',
  'Strong': 'mdi:weather-windy',
  'Favorite': 'mdi:heart',
  'Nature': 'mdi:leaf',
  'Sleep': 'mdi:sleep',
  'Fan': 'mdi:fan',
  'Level1': 'mdi:numeric-1-circle',
  'Level2': 'mdi:numeric-2-circle',
  'Level3': 'mdi:numeric-3-circle',
  'Level4': 'mdi:numeric-4-circle',
  'WetAndProtect': 'mdi:shield-water',
};

export class ModeButtons extends LitElement {
  @property({ type: Array }) public modes: string[] = [];
  @property({ type: String }) public currentMode?: string;
  @property({ type: String }) public lang = 'en';
  @property({ type: Boolean }) public isOn = true;
  @property({ attribute: false }) public onModeChange?: (mode: string) => void;
  @property({ attribute: false }) public onPowerToggle?: () => void;

  static styles = css`
    :host {
      display: block;
    }

    .mode-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      padding: 8px 0 4px;
    }

    .mode-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 22px;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      -webkit-user-select: none;
      padding: 0;
    }

    .mode-btn ha-icon {
      --mdc-icon-size: 22px;
      color: var(--secondary-text-color, #aaa);
      transition: color 0.2s ease;
    }

    .mode-btn:hover {
      background: rgba(255, 255, 255, 0.08);
    }

    .mode-btn:active {
      transform: scale(0.9);
    }

    .mode-btn.active {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 22px;
    }

    .mode-btn.active ha-icon {
      color: var(--primary-text-color, #fff);
    }

    /* Power button — first in row */
    .mode-btn.power {
      background: rgba(255, 255, 255, 0.12);
      border-radius: 22px;
    }

    .mode-btn.power ha-icon {
      color: var(--secondary-text-color, #aaa);
    }

    .mode-btn.power.on {
      background: var(--primary-color, #03a9f4);
    }

    .mode-btn.power.on ha-icon {
      color: #fff;
    }

    @media (max-width: 400px) {
      .mode-btn {
        width: 38px;
        height: 38px;
      }

      .mode-btn ha-icon {
        --mdc-icon-size: 20px;
      }
    }
  `;

  protected render(): TemplateResult {
    return html`
      <div class="mode-bar">
        ${this.onPowerToggle ? html`
          <button
            class="mode-btn power ${this.isOn ? 'on' : ''}"
            @click=${() => this.onPowerToggle?.()}
            title="${this.isOn ? localize('common.on', this.lang) : localize('common.off', this.lang)}"
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
        ` : nothing}
        ${this.modes.map(mode => html`
          <button
            class="mode-btn ${this.currentMode === mode ? 'active' : ''}"
            @click=${() => this._handleClick(mode)}
            title="${localize(`modes.${mode}`, this.lang) || mode}"
          >
            <ha-icon icon="${this._getModeIcon(mode)}"></ha-icon>
          </button>
        `)}
      </div>
    `;
  }

  private _getModeIcon(mode: string): string {
    return MODE_ICONS[mode] || 'mdi:fan';
  }

  private _handleClick(mode: string): void {
    if (this.onModeChange) {
      this.onModeChange(mode);
    }
  }
}

// Register component
if (!customElements.get('mode-buttons')) {
  customElements.define('mode-buttons', ModeButtons);
}

declare global {
  interface HTMLElementTagNameMap {
    'mode-buttons': ModeButtons;
  }
}
