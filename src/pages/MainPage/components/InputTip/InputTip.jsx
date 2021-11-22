import React from 'react';

import SvgSprite from '../../../../components/SvgSprite/SvgSprite';

import './InputTip.css';

const InputTip = () => {
    return (
        <div className='input-tip'>
            <p className='input-tip__text'>
                Начните вводить город,<br /> например, <span className='input-tip__text__example'>Ижевск</span>
            </p>
            <div className='input-tip__arrow'>
                <SvgSprite name='arrow-tip' />
            </div>
        </div>
    )
}

export default InputTip;