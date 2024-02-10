import { FC } from 'react';
import { CustomButton } from '../../../components/custom-button/CustomButton';
import { motion } from 'framer-motion';
import Screen from '../../../assets/screen.png';
import { IconName } from '../../../components/custom-icon/IconName';
import './Carousel.scss';

interface CarouselProps {
  theme: string;
}

export const Carousel: FC<CarouselProps> = ({ theme }) => {
  return (
    <ul className="carousel">
      <CarouselItem />
    </ul>
  );
};

export const CarouselItem: FC = () => {
  return (
    <motion.li
      className="carousel__item"
      initial={{ x: 900 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7 }}>
      <motion.img
        whileHover={{ scale: 1.02 }}
        className="carousel__img"
        src={Screen}
        alt="screenshot"
      />
      <div className="carousel__info">
        <h2 className="carousel__heading">React Pizza</h2>
        <p className="carousel__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis
          accusantium facilis, iusto veritatis quo at delectus nam,
        </p>
        <div className="carousel__actions">
          <a
            href="https://65b511f6c23cc3ad8229b9b7--eloquent-pudding-599500.netlify.app/"
            className="carousel__link"
            target="_blank">
            Link
          </a>
          <CustomButton children="More" styles="carousel__button" />
        </div>
      </div>
      <div className="carousel__buttons">
        <CustomButton iconName={IconName.LEFT_ARROW} />
        <CustomButton iconName={IconName.RIGHT_ARROW} />
      </div>
    </motion.li>
  );
};
