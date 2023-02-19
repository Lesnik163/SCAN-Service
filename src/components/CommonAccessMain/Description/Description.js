import React from 'react';
import './Description.css';
import funMan from './funMan.svg';

const Description = () => {
  return (
      <div className='Description__block'>
        <div className='Description__leftBlock'>
          <h1 className='Description__title'>сервис по поиску публикаций <br/> о компании <br/> по его инн
          </h1>
          <p className='Description__paragraph'>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
          </p>
          <button className='RequestBtn'>Запросить данные</button>
        </div>
        <div className='Description__rightBlock'>
          <img className='funMan' src={funMan} alt='funMan' />
        </div>
      </div>   
  )
}

export default Description