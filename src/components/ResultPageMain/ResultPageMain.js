import React from 'react';
import './ResultPageMain.css';
import aim from './womenAim.svg';
import ResultCarousel from './ResultCarousel'

const ResultPageMain = () => {
  return (
    <main className='resultMain'>
      <div className='resultMain__wrapper'>  
        <div className='resultMain__upper'>
          <div className='upper__box'>
            <h1 className='upper__title'>Ищем. Скоро будут результаты</h1>
            <section>Поиск может занять некоторое время, просим сохранять терпение.</section>
          </div>
          <div className='img__box'>
            <img src={aim} alt='aim'/>
          </div>
        </div>
        <div className='resultMain__middle'>
          <div className='upper__box'>
            <h1 className='upper__title upper__title_middle'>Общая сводка</h1>
            <section>Найдено 4 221 вариантов</section>
          </div>
          <ResultCarousel />
        </div>
        <div className='resultMain__lower'>

        </div>
      </div>  
    </main>
  )
}

export default ResultPageMain
