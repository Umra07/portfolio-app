import { FC } from 'react';
import './PageHeading.scss';
import { AnimatedWrapper } from '../animated-wrapper/AnimatedWrapper';

interface PageHeadingProps {
  heading: string[];
  theme: string;
}

export const PageHeading: FC<PageHeadingProps> = ({ heading, theme }) => {
  return (
    <AnimatedWrapper styles={`heading heading--${theme}`} direction="left">
      <ul className="heading__list">
        {heading.map((char, i) => (
          <li key={i} className="heading__item">
            {char.toUpperCase()}
          </li>
        ))}
      </ul>
    </AnimatedWrapper>
  );
};
