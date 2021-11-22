import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Header from '../Header/Header';
import MainPage from '../../pages/MainPage/MainPage';
import CityPage from '../../pages/CityPage/CityPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import './App.css';

import { LOCAL_STORAGE_KEY } from '../../constants/constants';
import { ROUTES } from '../../constants/routes';

const App = () => {
  useEffect(() => {
    const cities = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cities === null) {
      localStorage.setItem(LOCAL_STORAGE_KEY, '');
    }
  }, []);

  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path={ROUTES.MAIN_PAGE} exact={true} element={<MainPage />} />
          <Route path={ROUTES.CITY_PAGE} element={<CityPage />} />
          <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />

          <Route path='*' element={<Navigate to ={ROUTES.ERROR_PAGE} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
