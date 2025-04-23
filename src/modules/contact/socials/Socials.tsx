import { FC } from 'react';
import { CustomIcon } from '../../../components/custom-icon/CustomIcon';
import { IconName } from '../../../components/custom-icon/IconName';
import './Socials.scss';

export const Socials: FC = () => {
  return (
    <div className="socials">
      <h3 className="socials__heading">Socials:</h3>
      <div className="socials__links-block">
        <a
          className="socials__link"
          href="https://www.linkedin.com/in/volodymyr-karpenko-110a69251/"
          data-testid="linkedin-link"
          target="_blank">
          <CustomIcon iconName={IconName.LINKEDIN} />
        </a>
        <a className="socials__link" href="https://t.me/vl_karpenko" data-testid="telegram-link" target="_blank">
          <CustomIcon iconName={IconName.TELEGRAM} />
        </a>
        <a
          className="socials__link"
          href="https://www.instagram.com/vl.karpenko07/"
          data-testid="instagram-link"
          target="_blank">
          <CustomIcon iconName={IconName.INSTAGRAM} />
        </a>
      </div>
    </div>
  );
};
