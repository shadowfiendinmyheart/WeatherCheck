import React from 'react';

import SvgSprate from '../../../../components/SvgSprite/SvgSprite';

import './CityCard.css';

const CityCard = ({ name, degree, logo }) => {
    return (
        <div className='city-card'>
            <h4 className='city-card__name'>
                {name}
            </h4>
            <p className='city-card__degree'>
                {degree}
            </p>
            <div className='city-card__logo'>
                <div className='logo-position'>
                    <SvgSprate name={logo.toLowerCase()} size={'120%'} />
                </div>
            </div>
        </div>
    )
}

export default CityCard;