'use client';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isDarkMode = theme === 'dark';
  const themeLabel = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';

  if (!isInitialized) {
    return (
      <button
        type="button"
        aria-label="Theme toggle"
        aria-busy="true"
        disabled
        className={`${props.className} dark:bg-secondary bg-secondary-light border-borders-light animate-fadeLeft dark:border-borders hover:border-tertiary dark:hover:border-accent items-center justify-center rounded-full border-2 border-solid p-3 text-center opacity-0 transition-colors duration-300 ease-in-out`}
      >
        <FaMoon className="text-text-light dark:text-text" size={17.5} aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={themeLabel}
      aria-pressed={isDarkMode}
      onClick={toggleTheme}
      className={`${props.className} bg-secondary-light dark:bg-secondary border-borders-light animate-fadeLeft dark:border-borders hover:border-tertiary dark:hover:border-accent items-center justify-center rounded-full border-2 border-solid p-3 text-center opacity-0 transition-colors duration-300 ease-in-out`}
    >
      {isDarkMode ? (
        <FaMoon className="text-text-light dark:text-text" size={17.5} aria-hidden="true" />
      ) : (
        <FaSun className="text-text-light dark:text-text" size={17.5} aria-hidden="true" />
      )}
    </button>
  );
};

export default Theme;
