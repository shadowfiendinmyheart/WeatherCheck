import React from 'react';

import './WeatherDegree.css';

const WeatherDegree = ({ degree }) => {
    return (
        <h3 className='weather-degree'>{degree}</h3>
    )
}

export default WeatherDegree;