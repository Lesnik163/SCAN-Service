import React from 'react';
import './Header.css';
import Logo from './Logo';
import AccountBeforeAuthorization from './AccountBeforeAuthorization';
import NavBar from './NavBar';
import BurgerMenu from './BurgerMenu';

function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Logo />
        <NavBar />
        <AccountBeforeAuthorization />
        <BurgerMenu />
      </div>  
    </header>
  )
}

export default Header
