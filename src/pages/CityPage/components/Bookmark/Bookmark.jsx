import React from 'react';

import SvgSprite from '../../../../components/SvgSprite/SvgSprite';

import './Bookmark.css';

const Bookmark = ({ isFavorite, onClick }) => {
    return (
        <div className='bookmark' onClick={onClick}>
            {isFavorite ? (
                <SvgSprite name='bookmark-use' size={'24'}/>
            ) : (
                <SvgSprite name='bookmark' size={'24'}/>
            )}
        </div>
    )
}

export default Bookmark;