import { FC } from 'react';
import './ProjectsList.scss';
import { AnimatedWrapper } from '../../../components/animated-wrapper/AnimatedWrapper';

const projects = [
  { image: '#', name: 'Pizzeria', technologies: ['Javascript/Typescript', 'React', 'Redux'] },
  { image: '#', name: 'Gallery', technologies: ['Javascript/Typescript', 'React', 'Redux'] },
  { image: '#', name: 'Todo', technologies: ['Javascript/Typescript', 'React', 'Redux'] },
  { image: '#', name: 'Movies', technologies: ['Javascript/Typescript', 'React', 'Redux'] },
  { image: '#', name: 'Calculator', technologies: ['Javascript/Typescript', 'React', 'Redux'] },
  { image: '#', name: 'Lol', technologies: ['Javascript/Typescript', 'React', 'Redux'] },
];

export const ProjectsList: FC = () => {
  return (
    <AnimatedWrapper styles="projects-list__wrapper" direction="right">
      <ul className="projects-list">
        {projects.map(({ image, name, technologies }) => (
          <li key={name} className="project-card">
            <img src={image} alt="" className="project-card__img" />
            <h3 className="project-card__heading">{name}</h3>
            <ul className="technologies">
              {technologies.map((technology, i) => (
                <li key={i} className="technologies__item">
                  {technology}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </AnimatedWrapper>
  );
};
