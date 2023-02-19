import React from 'react'
import './Inputs.css'
const Inputs = () => {
  return (
    <form className='form'>
        <label className='form__label' htmlFor='login'>Логин или номер телефона:</label>
        <input className='form__loginInput' id='login' type='text'/>
        <label className='form__label' htmlFor='password'>Пароль:</label>
        <input className='form__loginInput' id='password' type='password'/>
    </form>
  )
}

export default Inputs
