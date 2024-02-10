import { FC } from 'react';
import './SectionWrapper.scss';

interface SectionWrapperProps {
  children: JSX.Element;
  styles?: string;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({ children, styles }) => {
  return <div className={`wrapper ${styles ? styles : ''}`}>{children}</div>;
};
