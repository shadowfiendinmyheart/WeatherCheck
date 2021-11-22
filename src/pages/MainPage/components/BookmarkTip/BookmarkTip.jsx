import React from 'react';
import SvgSprite from '../../../../components/SvgSprite/SvgSprite';

import './BookmarkTip.css';

const BookmarkTip = () => {
    return (
        <div className='bookmark-tip'>
            <p className='bookmark-tip__text'>
                Используйте значок «закладки»,<br />
                чтобы закрепить город на главной
            </p>
            <div className='bookmark-tip__logo'>
                <SvgSprite name='bookmark' size={'40'} />
            </div>
        </div>
    )
}

export default BookmarkTip;