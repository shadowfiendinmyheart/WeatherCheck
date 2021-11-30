import React from 'react';

import Icon from '../../../../components/Icon/Icon';

import './Bookmark.css';

const Bookmark = ({ isFavorite, onClick }) => {
    return (
        <div className='bookmark' onClick={onClick}>
            {isFavorite ? (
                <Icon name='bookmarkUse' size={'24'}/>
            ) : (
                <Icon name='bookmark' size={'24'}/>
            )}
        </div>
    )
}

export default Bookmark;