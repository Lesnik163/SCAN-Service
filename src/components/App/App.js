import './App.css';
import React, {useEffect} from 'react';


import Header from '../Header';
import CommonAccessMain from '../CommonAccessMain'
import Footer from '../Footer';
import { setScreenWidth } from '../../store/slices/app';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const newWidth = useSelector(state => state.app.width)
  const dispatch = useDispatch()
  const handleResize = () => {
    dispatch(setScreenWidth(window.innerWidth))
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
  })
  console.log('newWidth', newWidth)
  return (
    <div>
      <Header />
      <CommonAccessMain />
      <Footer />
    </div>
  );
}

export default App;
