/*
  Theme configuration
  Contains all theme colors and settings for light and dark modes
*/

export const themeConfig = {
  light: {
    background: '#f6f6f8',
    surface: '#ffffff',
    text: '#111422',
    textSecondary: '#6b7280',
    primary: '#1337ec',
    accent: '#2f81f7',
    border: '#e5e7eb',
    hover: '#f3f4f6',
  },
  dark: {
    background: '#111422',
    surface: '#1a1f2e',
    text: '#ffffff',
    textSecondary: '#d1d5db',
    primary: '#1337ec',
    accent: '#2f81f7',
    border: '#374151',
    hover: '#1f2937',
  },
};

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const STORAGE_KEY = 'portfolio_theme';
