import { FC, useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../../context/themeContext';
import { PageHeading } from '../../components/page-heading/PageHeading';
import { AnimatedWrapper } from '../../components/animated-wrapper/AnimatedWrapper';
import { SectionWrapper } from '../../components/section-wrapper/SectionWrapper';
import { ContactForm } from './contact-form/ContactForm';
import { Socials } from './socials/Socials';
import './Contact.scss';

export const Contact: FC = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <SectionWrapper styles="contact">
      <>
        <PageHeading theme={theme} heading={['c', 'o', 'n', 't', 'a', 'c', 't']} />
        <AnimatedWrapper styles="contact__content" direction="right">
          <>
            <div className="contact__top">
              <ContactForm theme={theme} />
              <img src="" alt="" className="contact__img" />
            </div>
            <Socials />
          </>
        </AnimatedWrapper>
      </>
    </SectionWrapper>
  );
};
