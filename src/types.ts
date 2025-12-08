// Home Assistant types
export interface HomeAssistant {
  states: { [entity_id: string]: HassEntity };
  services: { [domain: string]: { [service: string]: object } };
  user?: {
    name: string;
    is_admin: boolean;
  };
  language: string;
  callService(
    domain: string,
    service: string,
    data?: { [key: string]: unknown },
    target?: { entity_id: string | string[] }
  ): Promise<void>;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: { [key: string]: unknown };
  last_changed: string;
  last_updated: string;
  context: {
    id: string;
    parent_id: string | null;
    user_id: string | null;
  };
}

// Card configuration
export interface XiaomiHumidifierCardConfig {
  type: string;
  entity: string;
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_current_humidity?: boolean;
  show_target_humidity?: boolean;
  show_mode?: boolean;
  show_power?: boolean;
  show_sensors?: boolean;
  show_switches?: boolean;
  show_numbers?: boolean;
  show_selects?: boolean;
  show_buttons?: boolean;
  // Entity overrides
  humidity_entity?: string;
  target_humidity_entity?: string;
  temperature_entity?: string;
  mode_entity?: string;
  water_level_entity?: string;
  // Switches to show
  switches?: string[];
  // Sensors to show
  sensors?: string[];
  // Numbers to show
  numbers?: string[];
  // Selects to show
  selects?: string[];
  // Buttons to show
  buttons?: string[];
  // UI options
  compact?: boolean;
  theme?: string;
}

// Entity types for our integration
export interface HumidifierEntity extends HassEntity {
  attributes: {
    friendly_name?: string;
    humidity?: number;
    temperature?: number;
    target_humidity?: number;
    mode?: string;
    preset_mode?: string;
    preset_modes?: string[];
    water_level?: number;
    power?: boolean;
    [key: string]: unknown;
  };
}

// Supported features
export interface EntityFeatures {
  hasHumidity: boolean;
  hasTargetHumidity: boolean;
  hasTemperature: boolean;
  hasMode: boolean;
  hasWaterLevel: boolean;
  hasPower: boolean;
  switches: SwitchInfo[];
  sensors: SensorInfo[];
  numbers: NumberInfo[];
  selects: SelectInfo[];
  buttons: ButtonInfo[];
}

export interface SwitchInfo {
  entity_id: string;
  name: string;
  icon: string;
  state: boolean;
}

export interface SensorInfo {
  entity_id: string;
  name: string;
  icon: string;
  value: string | number;
  unit?: string;
}

export interface NumberInfo {
  entity_id: string;
  name: string;
  icon: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
}

export interface SelectInfo {
  entity_id: string;
  name: string;
  icon: string;
  value: string;
  options: string[];
}

export interface ButtonInfo {
  entity_id: string;
  name: string;
  icon: string;
}

// Mode mapping
export interface ModeInfo {
  name: string;
  icon: string;
  value: string;
}

export const MODES: ModeInfo[] = [
  { name: 'Low', icon: 'mdi:fan-speed-1', value: 'Low' },
  { name: 'Medium', icon: 'mdi:fan-speed-2', value: 'Medium' },
  { name: 'High', icon: 'mdi:fan-speed-3', value: 'High' },
  { name: 'Auto', icon: 'mdi:fan-auto', value: 'Humidity' },
];

// Switch definitions - from integration's switch.py
export const SWITCH_DEFINITIONS: { [key: string]: { icon: string; name: string } } = {
  buzzer: { icon: 'mdi:volume-high', name: 'Buzzer' },
  led: { icon: 'mdi:led-on', name: 'LED' },
  led_light: { icon: 'mdi:led-on', name: 'LED Light' },
  child_lock: { icon: 'mdi:lock', name: 'Child Lock' },
  dry: { icon: 'mdi:water-off', name: 'Dry Mode' },
  learn_mode: { icon: 'mdi:school', name: 'Learn Mode' },
  auto_detect: { icon: 'mdi:auto-fix', name: 'Auto Detect' },
  oscillate: { icon: 'mdi:rotate-3d-variant', name: 'Oscillation' },
  ptc: { icon: 'mdi:radiator', name: 'PTC Heater' },
  overwet_protect: { icon: 'mdi:water-alert', name: 'Overwet Protection' },
  display: { icon: 'mdi:monitor', name: 'Display' },
  anion: { icon: 'mdi:atom', name: 'Ionizer' },
  gestures: { icon: 'mdi:gesture-tap', name: 'Gesture Control' },
};

// Sensor definitions - from integration's sensor.py
export const SENSOR_DEFINITIONS: { [key: string]: { icon: string; name: string; unit?: string } } = {
  // Air Quality
  aqi: { icon: 'mdi:air-filter', name: 'Air Quality Index', unit: 'AQI' },
  pm25: { icon: 'mdi:blur', name: 'PM2.5', unit: 'µg/m³' },
  pm10: { icon: 'mdi:blur-linear', name: 'PM10', unit: 'µg/m³' },
  average_aqi: { icon: 'mdi:air-filter', name: 'Average AQI', unit: 'AQI' },
  tvoc: { icon: 'mdi:molecule', name: 'TVOC', unit: 'µg/m³' },
  co2: { icon: 'mdi:molecule-co2', name: 'CO2', unit: 'ppm' },
  // Temperature & Humidity
  temperature: { icon: 'mdi:thermometer', name: 'Temperature', unit: '°C' },
  humidity: { icon: 'mdi:water-percent', name: 'Humidity', unit: '%' },
  temperature_outside: { icon: 'mdi:thermometer', name: 'Outside Temperature', unit: '°C' },
  // Filter
  filter_life_remaining: { icon: 'mdi:air-filter', name: 'Filter Life', unit: '%' },
  filter_hours_used: { icon: 'mdi:clock-outline', name: 'Filter Hours Used', unit: 'h' },
  filter_left_time: { icon: 'mdi:calendar-clock', name: 'Filter Days Left', unit: 'd' },
  filter_type: { icon: 'mdi:air-filter', name: 'Filter Type' },
  dust_filter_life_remaining: { icon: 'mdi:air-filter', name: 'Dust Filter Life', unit: '%' },
  dust_filter_life_remaining_days: { icon: 'mdi:calendar-clock', name: 'Dust Filter Days Left', unit: 'd' },
  upper_filter_life_remaining: { icon: 'mdi:air-filter', name: 'Upper Filter Life', unit: '%' },
  upper_filter_life_remaining_days: { icon: 'mdi:calendar-clock', name: 'Upper Filter Days Left', unit: 'd' },
  // Motor
  motor_speed: { icon: 'mdi:fan', name: 'Motor Speed', unit: 'rpm' },
  motor2_speed: { icon: 'mdi:fan', name: 'Motor 2 Speed', unit: 'rpm' },
  // Usage stats
  use_time: { icon: 'mdi:clock-outline', name: 'Use Time', unit: 's' },
  purify_volume: { icon: 'mdi:air-purifier', name: 'Purify Volume', unit: 'm³' },
  // Humidifier specific
  water_level: { icon: 'mdi:water', name: 'Water Level', unit: '%' },
  target_humidity: { icon: 'mdi:water-percent', name: 'Target Humidity', unit: '%' },
  // Fan specific
  battery: { icon: 'mdi:battery', name: 'Battery', unit: '%' },
  speed: { icon: 'mdi:speedometer', name: 'Speed' },
  natural_speed: { icon: 'mdi:weather-windy', name: 'Natural Speed' },
  direct_speed: { icon: 'mdi:fan', name: 'Direct Speed' },
  angle: { icon: 'mdi:rotate-3d-variant', name: 'Oscillation Angle', unit: '°' },
  favorite_speed: { icon: 'mdi:speedometer', name: 'Favorite Speed', unit: 'rpm' },
  control_speed: { icon: 'mdi:speedometer', name: 'Control Speed', unit: 'rpm' },
  // Other
  mode: { icon: 'mdi:information-outline', name: 'Mode' },
  illuminance: { icon: 'mdi:brightness-6', name: 'Illuminance', unit: 'lx' },
  volume: { icon: 'mdi:volume-high', name: 'Volume', unit: '%' },
};

// Number (slider) definitions - from integration's number.py
export const NUMBER_DEFINITIONS: { [key: string]: { icon: string; name: string; min: number; max: number; step: number; unit?: string } } = {
  favorite_level: { icon: 'mdi:heart', name: 'Favorite Level', min: 0, max: 16, step: 1 },
  fan_level: { icon: 'mdi:fan', name: 'Fan Level', min: 1, max: 3, step: 1 },
  volume: { icon: 'mdi:volume-medium', name: 'Volume', min: 0, max: 100, step: 1, unit: '%' },
  target_humidity: { icon: 'mdi:water-percent', name: 'Target Humidity', min: 30, max: 80, step: 10, unit: '%' },
  angle: { icon: 'mdi:angle-acute', name: 'Oscillation Angle', min: 30, max: 120, step: 30, unit: '°' },
  delay_off_countdown: { icon: 'mdi:timer-off', name: 'Delay Off', min: 0, max: 480, step: 1, unit: 'min' },
};

// Select (dropdown) definitions - from integration's select.py
export const SELECT_DEFINITIONS: { [key: string]: { icon: string; name: string; options?: string[] } } = {
  led_brightness: { icon: 'mdi:brightness-6', name: 'LED Brightness', options: ['bright', 'dim', 'off'] },
  display_orientation: { icon: 'mdi:rotate-3d-variant', name: 'Display Orientation', options: ['forward', 'left', 'right'] },
  ptc_level: { icon: 'mdi:radiator', name: 'PTC Level', options: ['low', 'medium', 'high'] },
  mode: { icon: 'mdi:tune', name: 'Mode' },
};

// Button definitions - from integration's button.py
export const BUTTON_DEFINITIONS: { [key: string]: { icon: string; name: string } } = {
  reset_filter: { icon: 'mdi:air-filter', name: 'Reset Filter' },
  filters_cleaned: { icon: 'mdi:check-circle', name: 'Mark Filters Cleaned' },
};

// Binary sensor definitions
export const BINARY_SENSOR_DEFINITIONS: { [key: string]: { icon_on: string; icon_off: string; name: string } } = {
  water_tank: { icon_on: 'mdi:cup-water', icon_off: 'mdi:cup-off-outline', name: 'Water Tank' },
  water_shortage: { icon_on: 'mdi:water-off', icon_off: 'mdi:water', name: 'Water Shortage' },
  no_water: { icon_on: 'mdi:water-off', icon_off: 'mdi:water', name: 'No Water' },
};
