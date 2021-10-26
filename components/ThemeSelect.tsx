import * as React from 'react';
import { useTheme } from 'next-themes';
import { Command, Sun, Moon, Code } from 'react-feather';
import { cx, textSecondary } from '@/lib/utils';

const THEME_MAP = {
  system: {
    label: 'System',
    icon: <Command width=".9em" />,
  },
  light: {
    label: 'Light',
    icon: <Sun width=".9em" />,
  },
  dark: {
    label: 'Dark',
    icon: <Moon width=".9em" />,
  },
};

export default function ThemeSelect() {
  const [mounted, setMounted] = React.useState(false);
  const { theme: activeTheme, themes, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleChange = (e) => setTheme(e.target.value);

  return (
    <div className="relative max-w-[224px]">
      <label htmlFor="theme-menu" className="sr-only">
        Toggle theme
      </label>
      <span
        aria-hidden={true}
        className={cx(
          'absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none',
          textSecondary,
          'opacity-50',
        )}
      >
        {THEME_MAP[activeTheme].icon}
      </span>
      <span
        aria-hidden={true}
        className="absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none"
      >
        <Code
          width=".9em"
          className={cx('rotate-90', textSecondary, 'opacity-50')}
        />
      </span>
      <select
        id="theme-menu"
        className={cx(
          'appearance-none rounded-md border w-full pl-8 pr-8',
          'bg-gray-100 border-gray-200',
          'dark:bg-black dark:border-gray-800',
        )}
        onChange={handleChange}
      >
        {themes.map((theme) => {
          return (
            <option value={theme} selected={theme === activeTheme}>
              {THEME_MAP[theme].label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
