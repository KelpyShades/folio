'use client';
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';

const Theme = (props: { className?: string }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(systemTheme ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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
