import React, {useState} from 'react'
import Inputs from '../Inputs';
import './Form.css';
import FormFooter from '../FormFooter';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { signIn } from '../../../store/slices/profile';

const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const  handleSubmit = async () => {
    dispatch(signIn({
      login,
      password
    }))
    navigate("/");   
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
        <button 
        className='form__button' 
        onClick={handleSubmit} 
        disabled={submitDisable}
        style={submitDisable ? {opacity:`${'50%'}`} : {opacity:`${'100%'}`}}>Войти</button>
        <a className='form__ResumeLink' href='xxx' >Восстановить пароль</a>
        <FormFooter />
      </div>
  )
}

export default Form
