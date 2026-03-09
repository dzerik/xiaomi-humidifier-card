import { LitElement, html, css, TemplateResult } from 'lit';
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
  @property({ attribute: false }) public onModeChange?: (mode: string) => void;

  static styles = css`
    :host {
      display: block;
    }

    .mode-chips {
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
      margin: 8px 0 16px;
    }

    .mode-chip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.82em;
      color: var(--primary-text-color, #fff);
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      -webkit-user-select: none;
    }

    .mode-chip ha-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color, #aaa);
      transition: color 0.2s ease;
    }

    .mode-chip:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .mode-chip.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: #fff;
    }

    .mode-chip.active ha-icon {
      color: #fff;
    }

    .mode-chip:active {
      transform: scale(0.95);
    }

    @media (max-width: 400px) {
      .mode-chips {
        gap: 6px;
      }

      .mode-chip {
        padding: 5px 10px;
        font-size: 0.75em;
      }
    }
  `;

  protected render(): TemplateResult {
    return html`
      <div class="mode-chips">
        ${this.modes.map(mode => html`
          <div
            class="mode-chip ${this.currentMode === mode ? 'active' : ''}"
            @click=${() => this._handleClick(mode)}
          >
            <ha-icon icon="${this._getModeIcon(mode)}"></ha-icon>
            <span>${localize(`modes.${mode}`, this.lang) || mode}</span>
          </div>
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
