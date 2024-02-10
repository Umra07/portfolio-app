import { FC, useContext } from 'react';
import { SectionWrapper } from '../../components/section-wrapper/SectionWrapper';
import { PageHeading } from '../../components/page-heading/PageHeading';
import { ProjectsList } from './ProjectsList/ProjectsList';
import './Projects.scss';
import { ThemeContext, ThemeContextType } from '../../context/themeContext';

export const Projects: FC = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <SectionWrapper styles="projectss">
      <>
        <PageHeading theme={theme} heading={['p', 'r', 'o', 'j', 'e', 'c', 't', 's']} />
        <ProjectsList />
      </>
    </SectionWrapper>
  );
};
