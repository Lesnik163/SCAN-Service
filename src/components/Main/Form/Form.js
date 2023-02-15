import React from 'react'
import Inputs from '../Inputs';
import './Form.css';
import FormFooter from '../FormFooter';
const Form = () => {
  return (
      <div className='form__container'>
        <div className='form__linkBox'>
          <a className='form__link' href='xxx' >Войти</a>
          <a className='form__link form__link_inactive' href='xxx'>Зарегистрироваться</a>
        </div>
        <Inputs />
        <button className='form__button'>Войти</button>
        <a className='form__ResumeLink' href='xxx' >Восстановить пароль</a>
        <FormFooter />
      </div>
  )
}

export default Form
