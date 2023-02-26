import React from 'react'
import './Inputs.css'
const Inputs = ({login, password, setLogin, setPassword}) => {
  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }
  const handleLogin = (evt) => {
    setLogin(evt.target.value)
  }
  return (
    <form className='form'>
        <label className='form__label' htmlFor='login'>Логин или номер телефона:</label>
        <input className='form__loginInput' onChange={handleLogin} id='login' type='text'/>
        <label className='form__label' htmlFor='password'>Пароль:</label>
        <input className='form__loginInput' onChange={handlePassword} id='password' type='password'/>
        <span className='form__errText'>Неправильный пароль</span>
    </form>
  )
}

export default Inputs
