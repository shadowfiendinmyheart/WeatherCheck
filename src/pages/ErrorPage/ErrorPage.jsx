import React from 'react';
import { Link } from 'react-router-dom';
import WeatherDegree from '../../components/WeatherDegree/WeatherDegree';
import { ROUTES } from '../../constants/routes';

import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <WeatherDegree degree={'404°'} />
            <Link className='back-link' to={ROUTES.MAIN_PAGE}>
                Вернуться
            </Link>
        </div>
    )
}

export default ErrorPage;