import React from 'react';

import Icon from '../../../../components/Icon/Icon';

import './CityCard.css';

const CityCard = ({ name, degree, logo }) => {
    return (
        <div className='city-card'>
            <div className='city-card__wrapper'>
                <h4 className='city-card__name'>
                    {name}
                </h4>
                <p className='city-card__degree'>
                    {degree}
                </p>
                <div className='city-card__logo'>
                    <div className='logo-position'>
                        <Icon name={logo.toLowerCase()} size={'97px'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityCard;