// pages/index.tsx

import WebtoonForm from '../components/WebtoonForm';
import WebtoonList from '../components/WebtoonList';
import { useState } from 'react';

export default function Home() {
  const themes = ['light', 'dark', 'cupcake'];
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
    document.querySelector('html')?.setAttribute('data-theme', e.target.value);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Gestion des Webtoons</a>
        </div>
        <div className="flex-none">
          <select
            value={theme}
            onChange={handleThemeChange}
            className="select select-bordered"
          >
            {themes.map((themeOption) => (
              <option key={themeOption} value={themeOption}>
                {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <WebtoonForm />
        <WebtoonList />
      </div>
    </div>
  );
}
