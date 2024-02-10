import { FC } from 'react';
import { IconName } from '../custom-icon/IconName';
import { CustomIcon } from '../custom-icon/CustomIcon';
import './CustomButton.scss';

interface CustomButtonProps {
  children?: string;
  iconName?: IconName;
  styles?: string;
  iconStyles?: string;
  handleClick?: () => void;
}

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  iconName,
  styles,
  iconStyles,
  handleClick,
}) => {
  const icon = iconName ? <CustomIcon iconWrapperStyle={iconStyles} iconName={iconName} /> : '';
  const buttonStyles = styles ? styles : '';

  return (
    <button className={`button ${buttonStyles}`} onClick={handleClick}>
      {children ? children : ''}
      {icon}
    </button>
  );
};
