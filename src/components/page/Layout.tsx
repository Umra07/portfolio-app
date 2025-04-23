import { FC, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../modules/header/Header';
import { ThemeContext, ThemeContextType } from '../../context/themeContext';
import './Layout.scss';

export const Layout: FC = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div data-testid="layout" className={`layout layout--${theme}`}>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
