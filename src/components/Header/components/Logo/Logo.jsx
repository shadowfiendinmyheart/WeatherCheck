import React from 'react';
import Icon from '../../../Icon/Icon';

import './Logo.css';

const Logo = () => {
    return (
        <div className='logo'>
            <div className='logo__image'>
                <div className='logo__image_position'>
                    <Icon name='headerLogo' size={88} />
                </div>
            </div>
            <h2 className='logo__header'>WeatherCheck</h2>
        </div>
    )
}

export default Logo;