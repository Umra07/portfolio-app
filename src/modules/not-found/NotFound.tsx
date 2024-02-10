import { FC, useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../../context/themeContext';
import { ErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import { PageHeading } from '../../components/page-heading/PageHeading';
import { CustomButton } from '../../components/custom-button/CustomButton';
import './NotFound.scss';

export const NotFound: FC = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const error = useRouteError() as ErrorResponse;
  const navigate = useNavigate();

  return (
    <div className={`error error--${theme}`}>
      <PageHeading theme={theme} heading={['4', '0', '4']} />
      <div className="error__content-wrapper">
        <div className="error__content">
          <img src="" alt="" className="error__image" />
          <h1 className="error__heading">This page was not found!</h1>
          <p className="error__text">{error.data}</p>
          <div className="error__buttons">
            <CustomButton handleClick={() => navigate(-1)}>Back</CustomButton>
            <CustomButton handleClick={() => navigate('/')}>Main Page</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
