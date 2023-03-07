import './App.css';
import React, {useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { setScreenWidth } from '../../store/slices/app';
import { useDispatch } from 'react-redux';
import AppRoutes from '../../routes';

function App() {
  const dispatch = useDispatch()
  const handleResize = () => {
    dispatch(setScreenWidth(window.innerWidth))
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
  })
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
