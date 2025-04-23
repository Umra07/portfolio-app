import { FC } from 'react';
import './SectionWrapper.scss';

interface SectionWrapperProps {
  children: JSX.Element;
  styles?: string;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({ children, styles }) => {
  return <div data-testid="section-wrapper" className={`wrapper ${styles ? styles : ''}`}>{children}</div>;
};
