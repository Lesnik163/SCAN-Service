import React , {useState, useEffect} from "react";
import Slider from "react-slick";
import './Carousel.css'

import clock from'./clock.svg';
import lens from'./lens.svg';
import shield from './shield.svg';
import { ReactComponent as RightChevron } from './right-chevron.svg';
import { ReactComponent as LeftChevron } from './left-chevron.svg';


const Carousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[width])
  const slidesToShow = width < 1200 ? 1 : 3;
  const settings = {
      slidesToScroll: 1,
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: slidesToShow,
      swipeToSlide: true,
      nextArrow: <RightChevron />,
      prevArrow: <LeftChevron />,  
    };
    return (
      <div>
        <h2 className="slider__title">почему именно мы</h2>
        <div className="slider">
          <Slider {...settings}>
            <div>
              <div className="slider__card">
                <img className="card__img" src={clock} alt='clock' />
                <section className="card__section">Высокая и оперативная скорость обработки заявки</section>
              </div>
            </div>
            <div>
              <div className="slider__card">
                <img className="card__img" src={lens} alt='clock' />
                <section className="card__section">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</section>
              </div>
            </div>
            <div>
              <div className="slider__card">
                <img className="card__img" src={shield} alt='clock' />
                <section className="card__section">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</section>
              </div>
            </div>
            <div>
              <div className="slider__card">
                <img className="card__img" src={clock} alt='clock' />
                <section className="card__section">Высокая и оперативная скорость обработки заявки</section>
              </div>
            </div>         
          </Slider>
        </div>
        
      </div>
    );
  }

export default Carousel;
