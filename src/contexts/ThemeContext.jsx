import React, { createContext, useState, useEffect } from 'react';
import { THEME_MODES, STORAGE_KEY } from '../config/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_MODES.DARK;
    }

    // Default to light
    return THEME_MODES.LIGHT;
  });

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK
    );
  };

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem(STORAGE_KEY, theme);

    // Update HTML data attribute
    document.documentElement.setAttribute('data-theme', theme);

    // Update body class
    document.body.className = theme;
  }, [theme]);

  const value = {
    theme,
    toggleTheme,
    isDark: theme === THEME_MODES.DARK,
    isLight: theme === THEME_MODES.LIGHT,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
