import { FC, useContext } from 'react';
import { Author } from './author/Author';
import { Carousel } from './carousel/Carousel';
import { SectionWrapper } from '../../components/section-wrapper/SectionWrapper';
import { ThemeContext, ThemeContextType } from '../../context/themeContext';
import './Home.scss';

export const Home: FC = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <SectionWrapper>
      <>
        <Author theme={theme} />
        <Carousel theme={theme} />
      </>
    </SectionWrapper>
  );
};
