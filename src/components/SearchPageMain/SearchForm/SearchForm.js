import React from 'react';
import './SearchForm.css'
import document from '../document.svg';

const SearchForm = () => {
  return (
    <form className='searchForm'>
      <div className='searchForm__wrapper'>
        <img className='toggleSvg' src={document} alt='document' />
        <div className='searchForm__inputs'>
          <label className='label' htmlFor='inn' >ИНН компании<sup className='sup'>*</sup></label>
          <input className='input' type='input' id='inn' placeholder='10 цифр' name='tone'/>
          <label for='tone'>Тональность</label>
          <select className='input' id='tone'>
            <option>позитивная</option>
            <option>негативная</option>
            <option>любая</option>
          </select>
          <label className='label' htmlFor='documentQuantity' >Количество документов в выдаче<sup className='sup' >*</sup></label>
          <input className='input' type='number' id='documentQuantity' placeholder='От 0 до 1000' min="0" max="1000" step="1" name='documentQuantity'/>
            <label for="start">Диапазон поиска<sup className='sup'>*</sup></label>
          <div className='dateSpan'>
            <input className='input' type="date" id="start" name="startDate" placeholder='Дата начала' />
            <input className='input' type="date" id="end" name="startDate" placeholder='Дата конца' />
          </div>
          <div className='searchForm__btn toggle-btn'>
            <button className='requestForm__button'>Поиск</button>
            <span className='searchForm__span'>* Обязательные к заполнению поля</span>
          </div>
        </div>
        <div className='searchForm__checkBoxesAndBtn'>
          <div className='searchForm__checkBoxes'>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="first" name="checkBox"  />
              <label for="first">Признак максимальной полноты</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="second" name="checkBox"  />
              <label for="second">Упоминания в бизнес-контексте</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="third" name="checkBox"  />
              <label for="third">Главная роль в публикации</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="fourth" name="checkBox" />
              <label for="fourth">Публикации только с риск-факторами</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="fifth" name="checkBox"  />
              <label for="fifth">Включать технические новости рынков</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="sixth" name="checkBox"  />
              <label for="sixth">Включать анонсы и календари</label>
            </div>
            <div className='check' >
              <input className='checkBox' type="checkbox" id="seventh" name="checkBox"  />
              <label for="seventh">Включать сводки новостей</label>
            </div>
          </div>
          <div className='searchForm__btn'>
            <button className='requestForm__button'>Поиск</button>
            <span className='searchForm__span'>* Обязательные к заполнению поля</span>
          </div>
        </div>
      </div>    
    </form>
  )
}

export default SearchForm
