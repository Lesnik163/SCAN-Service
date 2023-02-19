import React from 'react';
import './CommonAccessMain.css';
import Description from './Description';
import MainCarousel from './MainCarousel';
import manWithTick from './manWithTick.svg'

const CommonAccessMain = () => {
  return (
    <main className='main'>
      <div className='main__wrapper'>
        <Description />
        <MainCarousel />
        <img src={manWithTick} alt='manWithTick' />
      </div> 
    </main>
  )
}

export default CommonAccessMain
