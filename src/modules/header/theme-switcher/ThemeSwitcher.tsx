import { FC } from 'react';
import { motion } from 'framer-motion';
import { CustomIcon } from '../../../components/custom-icon/CustomIcon';
import { IconName } from '../../../components/custom-icon/IconName';
import './ThemeSwitcher.scss';

interface ThemeSwitcherProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ theme, toggleTheme }) => {
  return (
    <div className={`theme theme--${theme}`} onClick={toggleTheme}>
      <CustomIcon iconWrapperStyle="theme__icon" iconName={IconName.MOON} />
      <motion.button layout transition={spring} className="theme__button" />
      <CustomIcon iconWrapperStyle="theme__icon" iconName={IconName.SUN} />
    </div>
  );
};

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
