import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

import Input from './components/Input/Input';
import InputTip from './components/InputTip/InputTip';
import BookmarkTip from './components/BookmarkTip/BookmarkTip';
import CityCard from './components/CityCard/CityCard';
import InputSuggestion from './components/InputSuggestion/InputSuggestion';
import Loader from '../../components/Loader/Loader';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';

import { useHttp } from '../../hooks/http.hook';

import './MainPage.css';

import { LOCAL_STORAGE_KEY } from '../../constants/constants';
import { capitalizeFirstLetter } from '../../utils/text';
import { fromKelvinToCelsia } from '../../utils/weather';
import CityList from '../../city.list.json';

const MainPage = () => {
    const [favCities, setFavCities] = useState([]);
    const [inputCity, setInputCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const { request, loading, error } = useHttp();

    const getCity = async (name) => {
        const req = await request(`/data/2.5/weather?q=${name}&lang=ru&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, { method: 'GET' });
        return {
            name,
            degree: fromKelvinToCelsia(req.main.temp) + '°',
            weather: req.weather[0].main
        }
    }

    useEffect(() => {
        const rawCities = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (rawCities && rawCities.length > 0) {
            const rawCitiesList = rawCities.split(',');
            const cities = rawCitiesList.map(name => {
                return getCity(name);
            })
            Promise.all([...cities]).then(value => {
                setFavCities(value);
            });
        }
    }, []);

    const inputHandler = (ev) => {
        const text = ev.target.value;
        let matches = [];
        const engName = capitalizeFirstLetter(CyrillicToTranslit().transform(text));
        if (text.length > 2) {
            matches = CityList.filter(city => {
                return city.name.slice(0, engName.length) === engName
            })
        }
        setSuggestions(matches);
        setInputCity(text);
    }

    return (
        <ErrorHandler isError={error}>
            <div className='main-page'>
                <div className='input-city'>
                    <Input value={inputCity} onChange={inputHandler} placeholder={'Укажите город'} />
                    <div className='input-city__suggestions'>
                        {suggestions && suggestions.map(suggestion => {
                            return (
                                <Link key={suggestion.id} to={`/city?name=${suggestion.name.toLowerCase()}`} className='link'>
                                    <InputSuggestion text={capitalizeFirstLetter(CyrillicToTranslit().reverse(suggestion.name))} length={inputCity.length} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
                {loading ? (
                    <div className='main-page__loader'>
                        <Loader />
                    </div>
                ) : (
                    localStorage.getItem(LOCAL_STORAGE_KEY)?.length > 0 ? (
                        <div className='city-grid'>
                            {favCities.map(city => {
                                return (
                                    <Link to={`/city?name=${city.name}`} className='link' key={city.engName}>
                                        <CityCard
                                            name={city.name}
                                            degree={city.degree}
                                            logo={city.weather}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    ) : (
                        <>
                            <div className='main-page__input-tip'>
                                <InputTip />
                            </div>
                            <div className='main-page__bookmark-tip'>
                                <BookmarkTip />
                            </div>
                        </>
                    )
                )}
            </div>
        </ErrorHandler>
    )
}

export default MainPage;