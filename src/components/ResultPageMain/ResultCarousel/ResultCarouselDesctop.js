import React from 'react'
import './ResultCarousel.css';
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { ReactComponent as RightChevron } from '../../CommonAccessMain/MainCarousel/Carousel/right-chevron.svg';
import { ReactComponent as LeftChevron } from '../../CommonAccessMain/MainCarousel/Carousel/left-chevron.svg';
import Period from './Period';

const ResultCarousel = () => {
    // const summary = objectSearchToSummary(objectSearch.data)
    const summary = useSelector(state => state.histograms.histogramInfo)
    const newWidth = useSelector(state => state.app.width)
    let maxSlideNumber = summary?.length>8 ? 8 : summary?.length
    
    const slidesToShow = newWidth < 700 ? 1 : maxSlideNumber ; 
    
    function LeftArrow(props) {
      const { className, style, onClick } = props;
      return (
        <LeftChevron 
          className={className}
          style={{ ...style, display: "block", left:'-15%'}}
          onClick={onClick}
        />
      );
    }
    const settings = {
        slidesToScroll: 1,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: slidesToShow,
        swipeToSlide: true,
        nextArrow: <RightChevron />,
        prevArrow: <LeftArrow />,  
      };
    return (
        <div className='greenBlock' >
          <div className='sections'>
            <section>Период</section>
            <section>Всего</section>
            <section>Риски</section>
          </div>
          <div className='slider-wrapper'>
            <Slider {...settings} >
              {summary && summary.map((period)=><Period
              className='periodItemCss'
              date={period.date}
              total={period.total}
              risk={period.risk}
              />)}
            </Slider>
          </div>          
        </div>
  )
}
export default ResultCarousel
