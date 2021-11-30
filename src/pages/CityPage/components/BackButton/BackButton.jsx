import React from 'react';

import Icon from '../../../../components/Icon/Icon';
import { useMobile } from '../../../../hooks/mobile.hook';

import './BackButton.css'

const BackButton = () => {
    const { isMobile } = useMobile();

    return (
        <div className='back-button'>
            <Icon name='arrowBack' size={'24'} />
            {!isMobile && <span className='back-button__text'>Назад</span>}
        </div>
    )
}

export default BackButton;