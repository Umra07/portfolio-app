import './Navigation.scss';
import { TopBar } from './top-bar/TopBar';
export const Navigation = () => {
  return (
    <>
      <TopBar />
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Projects
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Skills
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              About
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
