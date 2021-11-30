import React from 'react';

import Icon from '../../../../components/Icon/Icon';

import './InputTip.css';

const InputTip = () => {
    return (
        <div className='input-tip'>
            <p className='input-tip__text'>
                Начните вводить город,<br /> например, <span className='input-tip__text__example'>Ижевск</span>
            </p>
            <div className='input-tip__arrow'>
                <Icon name='arrowTip' size={38} />
            </div>
        </div>
    )
}

export default InputTip;