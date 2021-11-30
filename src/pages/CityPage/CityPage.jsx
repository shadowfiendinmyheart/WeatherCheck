import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Icon from '../../components/Icon/Icon';
import Bookmark from './components/Bookmark/Bookmark';
import BackButton from './components/BackButton/BackButton';
import Loader from '../../components/Loader/Loader';
import WeatherDegree from '../../components/WeatherDegree/WeatherDegree';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';

import { useHttp } from '../../hooks/http.hook';
import { useMobile } from '../../hooks/mobile.hook';

import './CityPage.css';

import { LOCAL_STORAGE_KEY } from '../../constants/constants';
import { capitalizeFirstLetter } from '../../utils/text';
import { formatTime, fromKelvinToCelsia } from '../../utils/weather';

const CityPage = () => {
    const [isFavoriteCity, setIsFavoriteCity] = useState(false);
    const [cityName, setCityName] = useState(null);
    const [weatherText, setWeatherText] = useState(null);
    const [degree, setDegree] = useState(null);
    const [weatherLogo, setWeatherLogo] = useState(null);
    const [pressure, setPressure] = useState(null);
    const [sunset, setSunset] = useState(null);

    const { search } = useLocation();
    const { request, loading, error } = useHttp();
    const { isMobile } = useMobile();

    useEffect(() => {
        const params = new URLSearchParams(search);
        const name = params.get('name');

        request(`/data/2.5/weather?q=${name}&lang=ru&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, { method: 'GET' }).then(city => {
            setCityName(city.name);
            setWeatherText(capitalizeFirstLetter(city.weather[0].description));
            setDegree(fromKelvinToCelsia(city.main.temp) + '°');
            setWeatherLogo(city.weather[0].main.toLowerCase());
            setSunset(formatTime(Number(city.sys.sunset) + Number(city.timezone)));
            setPressure(city.main.pressure);
        })
        .catch(e => {
            console.log(e);
        });
    }, [])

    useEffect(() => {
        const rawCities = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (rawCities.length > 0) {
            const cities = rawCities.split(',');
            cities.find(city => city === cityName) ? setIsFavoriteCity(true) : setIsFavoriteCity(false);
        }
    }, [cityName])

    const setNewCity = (cityName) => {
        const rawCities = localStorage.getItem(LOCAL_STORAGE_KEY);
        const updatedCities = rawCities.length > 0 ? [...rawCities.split(','), cityName] : [cityName];
        localStorage.setItem(LOCAL_STORAGE_KEY, updatedCities);
        setIsFavoriteCity(true);
    }

    const removeCity = (cityName) => {
        const rawCities = localStorage.getItem(LOCAL_STORAGE_KEY);
        const cities = rawCities.split(',');
        const updatedCities = cities.filter(city => city !== cityName);
        localStorage.setItem(LOCAL_STORAGE_KEY, updatedCities);
        setIsFavoriteCity(false);
    }

    const changeBookmark = () => {
        isFavoriteCity ? (
            removeCity(cityName)
        ) : (
            setNewCity(cityName)
        )
    }

    return (
        <ErrorHandler isError={error}>
            <div className='city-page'>
                <div className='buttons'>
                    <Link to='/' className='link'>
                        <BackButton />
                    </Link>
                    {!loading && !error && <Bookmark isFavorite={isFavoriteCity} onClick={changeBookmark} />}
                </div>
                {loading ? (
                    <div className='city-page__loader'>
                        <Loader />
                    </div>
                ) : (
                    <>
                        <div className='city-page__heading'>
                            <h2 className='heading__name-city'>{cityName}</h2>
                            <span className='heading__weather-name'>{"Облачно с прояснениями"}</span>
                        </div>
                        <div className='city-page__main-weather'>
                            <WeatherDegree degree={"-13°"} />
                            <div className='main-weather__icon'>
                                <Icon name={'thunderstorm'} size={isMobile ? 162 : 187} />
                            </div>
                        </div>
                        <div className='city-page__additional-weather'>
                            <div className='atmosphere-pressure'>
                                <div className='atmosphere-pressure__logo'>
                                    <Icon name={'barometer'} size={'24'} />
                                </div>
                                <span className='atmosphere-pressure__text'>{"756"} мм рт. ст.</span>
                            </div>
                            <div className='additional-weather__sunset'>
                                Закат в {"18:00"}
                            </div>
                        </div>
                    </>)
                }
            </div>
        </ErrorHandler>
    )
}

export default CityPage;