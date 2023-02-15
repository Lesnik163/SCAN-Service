import React from 'react';
import './AccountBeforeAuthorization.css';
import verticalSlash from './verticalSlash.svg';

const AccountBeforeAuthorization = () => {
  return (
    <div className='accountPanel'>
        <a className='accountPanel__link' href='xxx'>Зарегистрироваться</a>
        <img src={verticalSlash} alt='verticalSlash' />
        <button className='accountPanel__button'>Войти</button>
    </div> 
  )
}

export default AccountBeforeAuthorization;
