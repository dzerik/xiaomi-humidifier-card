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

    .mode-buttons {
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
      margin: 16px 0;
    }

    .mode-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px 16px;
      border-radius: 8px;
      background: var(--ha-card-background, var(--card-background-color, #f5f5f5));
      border: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      transition: all 0.2s ease;
      min-width: 60px;
    }

    .mode-button:hover {
      background: var(--primary-color, #03a9f4);
      color: white;
    }

    .mode-button:hover ha-icon {
      color: white;
    }

    .mode-button.active {
      background: var(--primary-color, #03a9f4);
      color: white;
      border-color: var(--primary-color, #03a9f4);
    }

    .mode-button.active ha-icon {
      color: white;
    }

    .mode-button ha-icon {
      margin-bottom: 4px;
      color: var(--primary-text-color, #212121);
      transition: color 0.2s ease;
    }

    .mode-name {
      font-size: 0.75em;
      text-transform: uppercase;
    }

    @media (max-width: 400px) {
      .mode-buttons {
        gap: 4px;
      }

      .mode-button {
        padding: 6px 12px;
        min-width: 50px;
      }
    }
  `;

  protected render(): TemplateResult {
    return html`
      <div class="mode-buttons">
        ${this.modes.map(mode => html`
          <div
            class="mode-button ${this.currentMode === mode ? 'active' : ''}"
            @click=${() => this._handleClick(mode)}
          >
            <ha-icon icon="${this._getModeIcon(mode)}"></ha-icon>
            <span class="mode-name">${localize(`modes.${mode}`, this.lang) || mode}</span>
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
