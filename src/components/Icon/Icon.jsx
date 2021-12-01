import React from 'react';

const Icon = ({ name, size }) => {
    const iconName = (name) => {
        switch (name) {
            case 'dust':
            case 'sand':
            case 'ash':
                return 'dust';
    
            case 'mist':
            case 'smoke':
            case 'haze':
            case 'fog':
                return 'mist';
    
            default:
                return name;
        }
    }

    return (
        <svg width={size} height={size}>
            <use href={`#${iconName(name)}`} />
        </svg>
    )
}

export default Icon;