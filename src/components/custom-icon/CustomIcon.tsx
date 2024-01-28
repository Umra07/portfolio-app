import { FC } from 'react';
import { IconName } from './IconName';
import { IconsMap } from './iconsMap';

interface CustomIconProps {
  iconName: IconName;
  iconWrapperStyle?: string;
}

export const CustomIcon: FC<CustomIconProps> = ({ iconName, iconWrapperStyle }) => {
  return <div className={iconWrapperStyle}>{IconsMap[iconName]}</div>;
};
