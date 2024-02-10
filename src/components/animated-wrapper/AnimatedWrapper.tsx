import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface AnimationProps {
  children: JSX.Element;
  styles?: string;
  direction: 'right' | 'left';
}

export const AnimatedWrapper: FC<AnimationProps> = ({ children, styles, direction }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          x: direction === 'left' ? -900 : 900,
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: direction === 'left' ? -900 : 900,
        }}
        transition={{
          duration: direction === 'left' ? 0.5 : 0.8,
        }}
        className={styles}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
