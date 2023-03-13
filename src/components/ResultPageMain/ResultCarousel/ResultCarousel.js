import React from 'react'
import './ResultCarousel.css';
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { objectSearchToSummary } from '../../../utils/objectSearchToSummary';
import {objectSearch} from '../../../MockData/objectSearch';
import { ReactComponent as RightChevron } from '../../CommonAccessMain/MainCarousel/Carousel/right-chevron.svg';
import { ReactComponent as LeftChevron } from '../../CommonAccessMain/MainCarousel/Carousel/left-chevron.svg';
import Period from './Period';

const ResultCarousel = () => {
    // const summary = objectSearchToSummary(objectSearch.data)
    const summary = useSelector(state => state.histograms.histogramInfo)
    const newWidth = useSelector(state => state.app.width)
    const slidesToShow = newWidth < 1100 ? 1 : 8;
    console.log(summary) 
    function LeftArrow(props) {
      const { className, style, onClick } = props;
      return (
        <LeftChevron 
          className={className}
          style={{ ...style, display: "block", marginLeft: '-165px'}}
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
          <Slider {...settings} style={{background: 'white', display:'inline-block', width:'87%'}}>
            {summary.map((period)=><Period
            date={period.date}
            total={period.total}
            risk={period.risk}
            />)}
          </Slider>
        </div>
  )
}

export default ResultCarousel
