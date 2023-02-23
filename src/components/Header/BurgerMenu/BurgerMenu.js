import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './BurgerMenu.css';
import Logo from '../../Footer/Logo';
import burger from './burger.svg';

// const Burger = (props) => {
//   return (
//     <button {...props}>
//       <img src={burger} alt='burger' />
//     </button>
//   )
// }
function BurgerMenu() {
  const expand = false
  return (    
        
        <Navbar key={expand}  expand={expand} className="mb-3 BurgerMenu">
          <Container fluid  >
            <Navbar.Toggle  bg="*"  aria-controls={`offcanvasNavbar-expand-${expand}`} className='own BurgerMenu border-0 shadow-none'>
              <img src={burger} alt='burger' />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton  d-flex className='burgerMenu__header closeButton d-flex'>
                <Logo />
              </Offcanvas.Header>
              <Offcanvas.Body className='burgerMenu__body'>
                
                <Nav className="text-center nav">
                  <Nav.Link href="#action1" >Главная</Nav.Link>
                  <Nav.Link href="#action2" >Тарифы</Nav.Link>
                  <Nav.Link href="#action3" >FAQ</Nav.Link>
                </Nav>
                <a className='burgerMenu__link' href='#' >Зарегистрироваться</a>
                <button variant="outline-success" className='button'>Войти</button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
             
    
  );
}

export default BurgerMenu;
