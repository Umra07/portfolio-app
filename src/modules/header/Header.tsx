import { FC, useContext } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './navigation/Navigation';
import { ThemeSwitcher } from './theme-switcher/ThemeSwitcher';
import './Header.scss';
import { ThemeContext, ThemeContextType } from '../../context/themeContext';

export const Header: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <header className={`header header--${theme}`}>
      <Navigation theme={theme} />
      <motion.div
        className="header__switchers"
        initial={{ x: 900 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </motion.div>
    </header>
  );
};
