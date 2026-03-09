# Xiaomi Humidifier Card

[![HACS Badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/dzerik/xiaomi-humidifier-card)](https://github.com/dzerik/xiaomi-humidifier-card/releases)
[![Build](https://github.com/dzerik/xiaomi-humidifier-card/actions/workflows/build.yml/badge.svg)](https://github.com/dzerik/xiaomi-humidifier-card/actions/workflows/build.yml)
[![License: MIT](https://img.shields.io/github/license/dzerik/xiaomi-humidifier-card)](LICENSE)

A custom Lovelace card for Home Assistant providing a thermostat-style interface for Xiaomi humidifiers. Features an interactive 270° arc dial with draggable target, color-coded humidity levels, and smooth animations.

## Features

- **Thermostat-style circular dial** with 270° arc and draggable thumb
- **Color gradient** by humidity level (orange → yellow → green → blue)
- **Current humidity marker** on the arc with pulsing animation
- **+/− buttons** with long-press repeat for precise control
- **Mode selection chips** (Low, Medium, High, Auto, Silent, Favorite)
- **Auto-discovery** of related switches, sensors, numbers, selects, buttons
- **Water tank status** indicators (no water, shortage, tank OK)
- **Responsive design** — mobile, tablet, desktop
- **Multi-language** support (English, Russian)
- **Visual config editor** — no YAML required
- **Off-state styling** — dimmed circle when device is off

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Click on **Frontend** → **+** → search **Xiaomi Humidifier Card**
3. Click **Install**
4. Refresh your browser

### Manual

1. Download `xiaomi-humidifier-card.js` from the [latest release](https://github.com/dzerik/xiaomi-humidifier-card/releases)
2. Copy to `config/www/xiaomi-humidifier-card.js`
3. Add resource: **Settings → Dashboards → Resources → Add Resource**
   - URL: `/local/xiaomi-humidifier-card.js`
   - Type: JavaScript Module

## Configuration

### Visual Editor

Add a card → search "Xiaomi Humidifier Card" → select entity → done.

### YAML

```yaml
type: custom:xiaomi-humidifier-card
entity: fan.deerma_jsq2w_humidifier
name: Bedroom Humidifier
show_name: true
show_state: true
show_target_humidity: true
show_mode: true
show_power: true
show_sensors: true
show_switches: true
show_numbers: true
show_selects: true
show_buttons: true
compact: false
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | **Required** | Entity ID (`fan.*` or `humidifier.*`) |
| `name` | string | Entity name | Custom display name |
| `show_name` | boolean | `true` | Show device name |
| `show_state` | boolean | `true` | Show on/off state |
| `show_target_humidity` | boolean | `true` | Show target humidity control |
| `show_mode` | boolean | `true` | Show mode chips |
| `show_power` | boolean | `true` | Show power button |
| `show_sensors` | boolean | `true` | Show sensor values |
| `show_switches` | boolean | `true` | Show switch toggles |
| `show_numbers` | boolean | `true` | Show number sliders |
| `show_selects` | boolean | `true` | Show select dropdowns |
| `show_buttons` | boolean | `true` | Show action buttons |
| `compact` | boolean | `false` | Compact mode |

### Entity Overrides

```yaml
humidity_entity: sensor.custom_humidity
target_humidity_entity: number.custom_target
temperature_entity: sensor.custom_temp
mode_entity: select.custom_mode
```

## Color Coding

The arc color indicates humidity comfort level:

| Range | Color | Meaning |
|-------|-------|---------|
| < 35% | Orange | Too dry |
| 35–45% | Yellow | Slightly dry |
| 45–55% | Green | Comfortable |
| 55–65% | Light blue | Humid |
| > 65% | Blue | Very humid |

## Auto-Discovery

The card discovers related entities by device base ID:

- **Switches**: `switch.{device}_led`, `_buzzer`, `_child_lock`, `_dry`, `_ptc`, etc.
- **Sensors**: `sensor.{device}_temperature`, `_humidity`, `_water_level`, `_filter_life_remaining`, etc.
- **Numbers**: `number.{device}_favorite_level`, `_fan_level`, `_volume`, `_target_humidity`, etc.
- **Selects**: `select.{device}_led_brightness`, `_mode`, `_ptc_level`, etc.
- **Buttons**: `button.{device}_reset_filter`, `_filters_cleaned`
- **Binary sensors**: `binary_sensor.{device}_no_water`, `_water_shortage`, `_water_tank`

## Supported Devices

Works with Xiaomi humidifiers via:
- [Xiaomi MiIO Air Purifier NG](https://github.com/dzerik/xiaomi_airpurifier)
- [Xiaomi MiIO](https://www.home-assistant.io/integrations/xiaomi_miio/)

### Tested Models

- Deerma JSQ2W / JSQ5 / MJJSQ
- Xiaomi CA1 / CB1 / CA4
- Xiaomi Humidifier V1
- Shuii JSQ001

## Development

```bash
git clone https://github.com/dzerik/xiaomi-humidifier-card.git
cd xiaomi-humidifier-card
npm install
npm run build       # production build
npm run watch       # dev mode with auto-rebuild
```

## Contributing

Contributions welcome! Please submit a Pull Request.

## License

[MIT License](LICENSE)
