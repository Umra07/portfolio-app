import { FC } from 'react';
import { Author } from './author/Author';
import { Projects } from './projects/Projects';
import './Outlet.scss';

export const Outlet: FC = () => {
  return (
    <div className="outlet">
      <Author />
      <Projects />
    </div>
  );
};
