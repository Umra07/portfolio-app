import { CustomButton } from '../../../components/custom-button/CustomButton';
import './Author.scss';

export const Author = () => {
  return (
    <div className="author">
      <div className="author__img" />
      <h2 className="author__name">Volodymyr Karpenko</h2>
      <p className="author__info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat vel asperiores quam dolor
        nam nemo, alias quae? Excepturi dolorem fuga mollitia reprehenderit minus, quam totam
        aliquid fugiat rem dignissimos libero?
      </p>
      <CustomButton styles="author__button">More</CustomButton>
    </div>
  );
};
