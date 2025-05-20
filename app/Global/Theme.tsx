'use client';
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';

const Theme = (props: { className?: string }) => {
  const [theme, setTheme] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemTheme ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  if (!isInitialized) {
    return (
      <button
        className={`${props.className} bg-secondary-light dark:bg-secondary border-borders-light animate-fadeLeft dark:border-borders hover:border-tertiary dark:hover:border-accent items-center justify-center rounded-full border-2 border-solid p-3 text-center opacity-0 transition-colors duration-300 ease-in-out`}
      >
        <FaMoon className="text-text-light dark:text-text" size={17.5} />
      </button>
    );
  }

  return (
    <button
      className={`${props.className} bg-secondary-light dark:bg-secondary border-borders-light animate-fadeLeft dark:border-borders hover:border-tertiary dark:hover:border-accent items-center justify-center rounded-full border-2 border-solid p-3 text-center opacity-0 transition-colors duration-300 ease-in-out`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <FaSun className="text-text-light dark:text-text" size={17.5} />
      ) : (
        <FaMoon className="text-text-light dark:text-text" size={17.5} />
      )}
    </button>
  );
};

export default Theme;
