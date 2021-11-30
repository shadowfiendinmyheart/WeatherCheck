import React from 'react';

const Icon = ({ name, size }) => {
    return (
        <svg width={size} height={size}>
            <use href={`#${name}`} />
        </svg>
    )
}

export default Icon;