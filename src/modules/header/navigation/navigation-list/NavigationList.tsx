import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuItemType } from '../Navigation';
import './NavigationList.scss';

interface NavigationListProps {
  theme: string;
  menu: MenuItemType[];
  isMenuOpen?: boolean;
  closeMenu: () => void;
}

export const NavigationList: FC<NavigationListProps> = ({ theme, isMenuOpen, menu, closeMenu }) => {
  // framer variants
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: {
      x: -900,
    },
    show: {
      x: 0,
      transition: { duration: 0.5, damping: 0 },
    },
    close: {
      x: -900,
      transition: { duration: 0.5, damping: 0 },
    },
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.ul
          initial="hidden"
          animate="show"
          exit="close"
          variants={container}
          className="navigation__list">
          {menu.map((obj, i) => (
            <motion.li
              key={i}
              variants={item}
              className={`navigation__item navigation__item--${theme}`}
              onClick={closeMenu}>
              <Link to={obj.link} className={`navigation__link navigation__link--${theme}`}>
                {obj.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
