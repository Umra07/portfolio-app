import { icons } from './icons';
import { IconName } from './IconName';

export const IconsMap: Record<IconName, JSX.Element> = {
  [IconName.LEFT_ARROW]: icons['left-arrow'],
  [IconName.RIGHT_ARROW]: icons['right-arrow'],
  [IconName.MOON]: icons.moon,
  [IconName.SUN]: icons.sun,
  [IconName.JAVASCRIPT]: icons.javascript,
  [IconName.TYPESCRIPT]: icons.typescript,
  [IconName.REACT]: icons.react,
  [IconName.REDUX]: icons.redux,
  [IconName.HTML]: icons.html,
  [IconName.CSS]: icons.css,
  [IconName.ANGULAR]: icons.angular,
  [IconName.POSTGRES]: icons.postgres,
  [IconName.INSTAGRAM]: icons.instagram,
  [IconName.TELEGRAM]: icons.telegram,
  [IconName.LINKEDIN]: icons.linkedin,
};
