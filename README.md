# Xiaomi Humidifier Card

A custom Lovelace card for Home Assistant that provides a beautiful thermostat-style interface for Xiaomi humidifiers.

![Card Preview](https://raw.githubusercontent.com/dzerikproject/xiaomi-humidifier-card/main/images/preview.png)

## Features

- Circular humidity display with current and target humidity
- Mode selection buttons (Low, Medium, High, Auto)
- Auto-discovery of related switches and sensors
- Displays switches: LED, Buzzer, Child Lock, Dry mode, Overwet Protection
- Displays sensors: Temperature, Water Level, Motor Speed
- Water tank status indicator
- Responsive design for different screen sizes
- Compact mode option
- Multi-language support (English, Russian)
- Visual configuration editor

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Click on "Frontend"
3. Click the "+" button
4. Search for "Xiaomi Humidifier Card"
5. Click "Install"
6. Refresh your browser

### Manual Installation

1. Download `xiaomi-humidifier-card.js` from the [latest release](https://github.com/dzerikproject/xiaomi-humidifier-card/releases)
2. Copy it to `config/www/xiaomi-humidifier-card.js`
3. Add the resource in Home Assistant:
   - Go to Settings -> Dashboards -> Resources
   - Click "Add Resource"
   - URL: `/local/xiaomi-humidifier-card.js`
   - Resource type: JavaScript Module

## Configuration

### Using Visual Editor

1. Add a new card to your dashboard
2. Search for "Xiaomi Humidifier Card"
3. Select your humidifier entity
4. Configure display options

### Manual YAML Configuration

```yaml
type: custom:xiaomi-humidifier-card
entity: fan.deerma_jsq2w_humidifier
name: Bedroom Humidifier
show_name: true
show_state: true
show_target_humidity: true
show_mode: true
compact: false
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | **Required** | The entity ID of your humidifier (fan.* or humidifier.*) |
| `name` | string | Entity name | Custom name to display |
| `show_name` | boolean | `true` | Show/hide the name |
| `show_state` | boolean | `true` | Show/hide the on/off state |
| `show_target_humidity` | boolean | `true` | Show/hide target humidity control |
| `show_mode` | boolean | `true` | Show/hide mode buttons |
| `compact` | boolean | `false` | Enable compact mode |

## Supported Devices

This card is designed to work with Xiaomi humidifiers integrated via:

- [Xiaomi MiIO Air Purifier NG](https://github.com/dzerikproject/xiaomi_airpurifier)
- [Xiaomi MiIO](https://www.home-assistant.io/integrations/xiaomi_miio/)

### Tested Models

- Deerma Humidifier JSQ2W
- Deerma Humidifier JSQ5
- Deerma Humidifier MJJSQ
- Xiaomi Humidifier CA1/CB1
- Xiaomi Humidifier V1

## Auto-Discovery

The card automatically discovers related entities based on your main entity:

- **Switches**: `switch.{device}_led`, `switch.{device}_buzzer`, `switch.{device}_child_lock`, etc.
- **Sensors**: `sensor.{device}_temperature`, `sensor.{device}_humidity`, `sensor.{device}_water_level`, etc.
- **Select**: `select.{device}_mode` for mode selection

## Screenshots

### Normal Mode
![Normal Mode](https://raw.githubusercontent.com/dzerikproject/xiaomi-humidifier-card/main/images/normal.png)

### Compact Mode
![Compact Mode](https://raw.githubusercontent.com/dzerikproject/xiaomi-humidifier-card/main/images/compact.png)

## Development

```bash
# Clone the repository
git clone https://github.com/dzerikproject/xiaomi-humidifier-card.git

# Install dependencies
npm install

# Build
npm run build

# Build with watch mode
npm run watch
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Support

If you find this card useful, please consider:
- Starring this repository
- Reporting bugs and feature requests in [Issues](https://github.com/dzerikproject/xiaomi-humidifier-card/issues)
