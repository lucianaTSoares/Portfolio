'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [darkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkTheme) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return { darkTheme, setIsDarkTheme };
}
