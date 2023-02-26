import React, {useState} from 'react'
import Inputs from '../Inputs';
import './Form.css';
import FormFooter from '../FormFooter';
import { loginFetch } from '../../../services/auth';

const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const  handleSubmit = async () => {
    const res = await loginFetch({
      login,
      password
    })
    console.log(res)
  }
  const submitDisable = !( login && password )
  return (
      <div className='form__container'>
        <div className='form__linkBox'>
          <a className='form__link' href='xxx' >Войти</a>
          <a className='form__link form__link_inactive' href='xxx'>Зарегистрироваться</a>
        </div>
        <Inputs 
        login={login} 
        password={password} 
        setLogin={setLogin} 
        setPassword={setPassword}/>
        <button className='form__button' onClick={handleSubmit} disabled={submitDisable}>Войти</button>
        <a className='form__ResumeLink' href='xxx' >Восстановить пароль</a>
        <FormFooter />
      </div>
  )
}

export default Form
