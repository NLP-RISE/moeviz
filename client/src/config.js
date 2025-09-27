// Configuration for the client

// Default configuration
const defaultConfig = {
  serverUrl: 'http://0.0.0.0:9000',
  models: {
    'moe_d_het': { name: "moe_d_het", expertCount: 5 },
    'moe_a1': { name: "moe_a1", expertCount: 5 },
    'moe_c2': { name: "moe_c2", expertCount: 5 },
    'moe_e_het': { name: "moe_e_het", expertCount: 5 },
    'moe_e_hom': { name: "moe_e_hom", expertCount: 5 },
    'moe_d_het': { name: "moe_e_hom", expertCount: 5 },
    'moe_d_hom': { name: "moe_e_hom", expertCount: 5 },

  },
  layers: {
    '0': { name: 0 },
    '1': { name: 1 },
    '2': { name: 2 },
    '3': { name: 3 },
    '4': { name: 4 },
    '5': { name: 5 },
    '6': { name: 6 },
    '7': { name: 7 },
    '8': { name: 8 },
    '9': { name: 9 },
    '10': { name: 10 },
    '11': { name: 11 },
  }
};

// Load custom config from window if available
const customConfig = window.__MOEVIZ_CONFIG__ || {};

// Merge configurations
export const config = {
  ...defaultConfig,
  ...customConfig,
  models: {
    ...defaultConfig.models,
    ...customConfig.models
  }
};

// Export configuration values
export const serverUrl = config.serverUrl;
export const modelConfigs = config.models;
export const layerConfigs = config.layers