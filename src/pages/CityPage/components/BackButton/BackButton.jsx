import React from 'react';

import SvgSprite from '../../../../components/SvgSprite/SvgSprite';
import { useMobile } from '../../../../hooks/mobile.hook';

import './BackButton.css'

const BackButton = () => {
    const { isMobile } = useMobile();

    return (
        <div className='back-button'>
            <SvgSprite name='arrow-back' size={'24'} />
            {!isMobile && <span className='back-button__text'>Назад</span>}
        </div>
    )
}

export default BackButton;