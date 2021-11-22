import React from 'react';

import LogoImage from './LogoImage';

import './Logo.css';

const Logo = () => {
    return (
        <div className='logo'>
            <div className='logo__image'>
                <div className='logo__image_position'>
                    <LogoImage />
                </div>
            </div>
            <h2 className='logo__header'>WeatherCheck</h2>
        </div>
    )
}

export default Logo;