import { css } from 'lit';

export const styles = css`
  :host {
    --primary-color: var(--ha-card-primary-color, #03a9f4);
    --secondary-color: var(--ha-card-secondary-color, #4fc3f7);
    --text-color: var(--primary-text-color, #212121);
    --text-secondary-color: var(--secondary-text-color, #727272);
    --disabled-color: var(--disabled-text-color, #bdbdbd);
    --card-background: var(--ha-card-background, var(--card-background-color, #fff));
    --arc-color: var(--primary-color);
    --arc-background: var(--disabled-text-color, #e0e0e0);
  }

  ha-card {
    padding: 12px 16px 8px;
    box-sizing: border-box;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0;
  }

  .header-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1;
  }

  .header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    flex-shrink: 0;
  }

  .card-header .name {
    font-size: 1.2em;
    font-weight: 500;
    color: var(--text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-header .state {
    font-size: 0.9em;
    color: var(--text-secondary-color);
  }

  .power-button {
    --mdc-icon-button-size: 40px;
    color: var(--text-secondary-color);
  }

  .power-button.on {
    color: var(--primary-color);
  }

  /* Header switches (vertical column under power button) */
  .header-switches {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  .header-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .header-switch ha-icon {
    --mdc-icon-size: 18px;
    color: var(--disabled-color);
    transition: color 0.2s ease;
  }

  .header-switch:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .header-switch.on ha-icon {
    color: var(--primary-color);
  }

  /* Header status indicators (under state text) */
  .header-status {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8em;
    margin-top: 4px;
  }

  .header-status ha-icon {
    --mdc-icon-size: 16px;
  }

  .header-status.warning {
    color: var(--warning-color, #ff9800);
  }

  .header-status.error {
    color: var(--error-color, #f44336);
  }

  .header-status.ok {
    color: var(--success-color, #4caf50);
  }

  /* Circular display — styles are inside humidity-circle component */

  /* Mode buttons — styles are inside mode-buttons component */

  /* Legacy switches row (kept for compatibility) */

  /* Sensors row */
  .sensors-row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px 0;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .sensor-item {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
  }

  .sensor-item ha-icon {
    color: var(--text-secondary-color);
    --mdc-icon-size: 18px;
  }

  .sensor-item .sensor-value {
    font-size: 0.9em;
    color: var(--text-color);
  }

  .sensor-item .sensor-unit {
    font-size: 0.8em;
    color: var(--text-secondary-color);
  }

  /* Numbers row (sliders) */
  .numbers-row {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 0;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .number-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 8px;
  }

  .number-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .number-name {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85em;
    color: var(--text-secondary-color);
  }

  .number-name ha-icon {
    --mdc-icon-size: 18px;
  }

  .number-value {
    font-size: 0.9em;
    font-weight: 500;
    color: var(--text-color);
    min-width: 50px;
    text-align: right;
  }

  .number-control {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .number-control input[type="range"] {
    flex: 1;
    height: 4px;
    -webkit-appearance: none;
    background: var(--arc-background);
    border-radius: 2px;
    outline: none;
  }

  .number-control input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    border: 2px solid var(--card-background);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .number-control input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    border: 2px solid var(--card-background);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  /* Selects row (dropdowns) */
  .selects-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    padding: 12px 0;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .select-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 120px;
  }

  .select-header {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .select-name {
    font-size: 0.85em;
    color: var(--text-secondary-color);
  }

  .select-name ha-icon {
    --mdc-icon-size: 18px;
  }

  .select-item select {
    padding: 6px 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    color: var(--text-color);
    font-size: 0.9em;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .select-item select:hover {
    border-color: var(--primary-color);
  }

  .select-item select:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 1px var(--primary-color);
  }

  /* Buttons row (action buttons) */
  .buttons-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 12px 0;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .button-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 16px;
    border-radius: 8px;
    background: var(--ha-card-background, var(--card-background-color, #f5f5f5));
    border: 1px solid var(--divider-color, #e0e0e0);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .button-item:hover {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }

  .button-item:hover ha-icon {
    color: white;
  }

  .button-item:active {
    transform: scale(0.95);
  }

  .button-item ha-icon {
    color: var(--primary-color);
    --mdc-icon-size: 24px;
    transition: color 0.2s ease;
  }

  .button-name {
    font-size: 0.75em;
    text-transform: uppercase;
    color: var(--text-secondary-color);
    transition: color 0.2s ease;
  }

  .button-item:hover .button-name {
    color: white;
  }

  /* Legacy status indicators (moved to header) */

  /* Unavailable state */
  .unavailable {
    opacity: 0.5;
    pointer-events: none;
  }

  .unavailable-message {
    text-align: center;
    color: var(--text-secondary-color);
    padding: 20px;
  }

  /* Responsive styles */
  @media (max-width: 400px) {
    ha-card {
      padding: 12px;
    }

    .switches-row {
      gap: 8px;
    }

    .switch-item {
      padding: 4px;
    }
  }
`;
