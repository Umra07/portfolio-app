import { FC, useContext } from 'react';
import { PageHeading } from '../../components/page-heading/PageHeading';
import { SectionWrapper } from '../../components/section-wrapper/SectionWrapper';
import { CustomIcon } from '../../components/custom-icon/CustomIcon';
import { IconName } from '../../components/custom-icon/IconName';
import './Skills.scss';
import { AnimatedWrapper } from '../../components/animated-wrapper/AnimatedWrapper';
import { ThemeContext, ThemeContextType } from '../../context/themeContext';

export const Skills: FC = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <SectionWrapper styles="skills">
      <>
        <PageHeading theme={theme} heading={['s', 'k', 'i', 'l', 'l', 's']} />
        <AnimatedWrapper styles="list-wrapper" direction="right">
          <ul className="skills__list">
            <li className="skills__card">
              <CustomIcon iconName={IconName.HTML} />
            </li>
            <li className="skills__card">
              <CustomIcon iconName={IconName.CSS} />
            </li>
            <li className="skills__card">
              <CustomIcon iconName={IconName.JAVASCRIPT} />
            </li>
            <li className="skills__card">
              <CustomIcon iconName={IconName.TYPESCRIPT} />
            </li>
            <li className="skills__card">
              <CustomIcon iconName={IconName.REACT} />
            </li>
            <li className="skills__card">
              <CustomIcon iconName={IconName.REDUX} />
            </li>
            <li className="skills__card">
              <CustomIcon iconName={IconName.ANGULAR} />
            </li>
            <li className="skills__card">
              <CustomIcon iconName={IconName.POSTGRES} />
            </li>
          </ul>
        </AnimatedWrapper>
      </>
    </SectionWrapper>
  );
};
