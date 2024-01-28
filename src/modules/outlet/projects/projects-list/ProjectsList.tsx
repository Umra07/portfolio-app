import { FC } from 'react';
import './ProjectsList.scss';
import { CustomButton } from '../../../../components/custom-button/CustomButton';

export const ProjectsList: FC = () => {
  return (
    <ul className="projects__list">
      <ProjectsItem />
      <ProjectsItem />
      <ProjectsItem />
      <ProjectsItem />
      {/* <ProjectsItem />
      <ProjectsItem /> */}
    </ul>
  );
};

export const ProjectsItem: FC = () => {
  return (
    <li className="projects__item">
      <div className="projects__img" />
      <h2 className="projects__heading">React Pizza</h2>
      <p className="projects__info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis accusantium
        facilis, iusto veritatis quo at delectus nam,
      </p>
      <div className="projects__actions">
        <a
          href="https://65b511f6c23cc3ad8229b9b7--eloquent-pudding-599500.netlify.app/"
          className="projects__link"
          target="_blank">
          Link
        </a>
        <CustomButton children="More" styles="projects__button" />
      </div>
    </li>
  );
};
