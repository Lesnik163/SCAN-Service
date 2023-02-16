import React from 'react';
import burger from './burger.svg';
import './BurgerMenu.css';

const BurgerMenu = () => {
  return (
    <div className='BurgerMenu'>
      <button className='BurgerMenu__button'>
        <img src={burger} alt='burger' />
      </button>
    </div>
  )
}

export default BurgerMenu
