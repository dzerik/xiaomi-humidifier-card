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

// Switch definitions
export const SWITCH_DEFINITIONS: { [key: string]: { icon: string; name: string } } = {
  led: { icon: 'mdi:led-on', name: 'LED' },
  led_light: { icon: 'mdi:led-on', name: 'LED' },
  buzzer: { icon: 'mdi:volume-high', name: 'Buzzer' },
  child_lock: { icon: 'mdi:lock', name: 'Child Lock' },
  dry: { icon: 'mdi:water-off', name: 'Dry Mode' },
  overwet_protect: { icon: 'mdi:water-alert', name: 'Overwet Protect' },
};

// Sensor definitions
export const SENSOR_DEFINITIONS: { [key: string]: { icon: string; name: string; unit?: string } } = {
  temperature: { icon: 'mdi:thermometer', name: 'Temperature', unit: '°C' },
  humidity: { icon: 'mdi:water-percent', name: 'Humidity', unit: '%' },
  water_level: { icon: 'mdi:water', name: 'Water Level', unit: '%' },
  motor_speed: { icon: 'mdi:fan', name: 'Motor Speed', unit: 'rpm' },
  use_time: { icon: 'mdi:clock-outline', name: 'Use Time', unit: 'h' },
};

// Binary sensor definitions
export const BINARY_SENSOR_DEFINITIONS: { [key: string]: { icon_on: string; icon_off: string; name: string } } = {
  water_tank: { icon_on: 'mdi:cup-water', icon_off: 'mdi:cup-off-outline', name: 'Water Tank' },
  water_shortage: { icon_on: 'mdi:water-off', icon_off: 'mdi:water', name: 'Water Shortage' },
  no_water: { icon_on: 'mdi:water-off', icon_off: 'mdi:water', name: 'No Water' },
};
