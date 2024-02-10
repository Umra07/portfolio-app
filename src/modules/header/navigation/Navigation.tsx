import { FC, useEffect, useState } from 'react';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import { pathes } from '../../../pathes';
import { NavigationList } from './navigation-list/NavigationList';
import './Navigation.scss';

export type MenuItemType = {
  name: string;
  link: string;
};

interface NavigationProps {
  theme: string;
}

export const Navigation: FC<NavigationProps> = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  const dimensions = useWindowDimensions();

  const toggleMenu = () => {
    if (dimensions.width < 768) {
      setIsMenuOpen((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (dimensions.width >= 768) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [dimensions.width]);

  const menu: MenuItemType[] = [
    { name: 'Home', link: pathes.HOME },
    { name: 'Projects', link: pathes.PROJECTS },
    { name: 'Skills', link: pathes.SKILLS },
    { name: 'Contact', link: pathes.CONTACT },
  ];

  return (
    <nav className={`navigation navigation--${theme}`}>
      <div className="hamburger">
        <span
          className={`hamburger__line hamburger__line--${theme} ${
            isMenuOpen ? 'hamburger__line--active' : ''
          }`}
          onClick={toggleMenu}
        />
      </div>
      <NavigationList theme={theme} menu={menu} isMenuOpen={isMenuOpen} closeMenu={toggleMenu} />
    </nav>
  );
};
