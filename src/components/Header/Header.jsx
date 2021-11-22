import React, { useEffect, useState } from 'react';
import { Link ,useLocation } from 'react-router-dom'
import { ROUTES } from '../../constants/routes';

import Logo from './components/Logo/Logo';

import { useMobile } from '../../hooks/mobile.hook';

import './Header.css';

const Header = () => {
    const [hide, setHide] = useState(false);
    const location = useLocation();
    const { isMobile } = useMobile();
    
    useEffect(() => {
        if (isMobile && location.pathname === ROUTES.CITY_PAGE) {
            setHide(true);
        } else {
            setHide(false);
        }
        
    }, [location, isMobile])

    return (
        !hide && 
        <header className='header'>
            <Link to={ROUTES.MAIN_PAGE} className='link'>
                <Logo />
            </Link>
        </header>
    )
}

export default Header;