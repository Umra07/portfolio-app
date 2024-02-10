import { FC } from 'react';
import { CustomButton } from '../../../components/custom-button/CustomButton';
import { AnimatedWrapper } from '../../../components/animated-wrapper/AnimatedWrapper';
import './Author.scss';

interface AuthorProps {
  theme: string;
}

export const Author: FC<AuthorProps> = ({ theme }) => {
  return (
    <AnimatedWrapper styles={`author__wrapper author__wrapper--${theme}`} direction="left">
      <div className={'author'}>
        <div className="author__img" />
        <div className="author__info">
          <h2 className="author__name">Volodymyr Karpenko</h2>
          <p className="author__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat vel asperiores quam
            dolor nam nemo, alias quae? Excepturi dolorem fuga mollitia reprehenderit minus, quam
            totam aliquid fugiat rem dignissimos libero?
          </p>
          <CustomButton styles="author__button">More</CustomButton>
        </div>
      </div>
    </AnimatedWrapper>
  );
};
