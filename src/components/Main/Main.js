import React from 'react'
import './Main.css'
import peopleWithKey from './peopleWithKey.svg';
import padlock from './padlock.svg';
import Form from './Form';

const Main = () => {
  return (
    <main className='main'>
      <div className='main__wrapper'>
        <div className='main__leftBox'>
          <h1 className='main__title'>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
          <img className='main__image' src={peopleWithKey} alt='peopleWithKey' />
        </div>
        <div className='main__rightBox'>
          <img className='main__padlockImg' src={padlock} alt='padlock' />
          <Form />
        </div>
      </div>
    </main>
  )
}

export default Main
