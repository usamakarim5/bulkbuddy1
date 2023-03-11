import React, { useRef } from "react";
import laptop from "../images/slider-images/laptop.webp";
import mobiles from "../images/slider-images/mobiles.webp";
import Slider from 'react-slick';
import { Link } from "react-router-dom";


const SliderComponent = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false,
          nextArrow: null, 
          prevArrow: null
        }
      }
    ]
  }; 

  function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <button className="slider_next_btn" onClick={onClick}>  <i class="fa fa-chevron-right slider_icon" aria-hidden="true"></i></button>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <button className="slider_prev_btn" onClick={onClick}>  <i class="fa fa-chevron-left slider_icon" aria-hidden="true"></i></button>
    );
  }

  return (
    <>
   
     <Slider {...settings} className='mt-3 main_slider_cont upper_slider'>
     <Link className=''>
        <img src={mobiles} className="d-block w-100 slider_image" alt="..." />
       </Link>
        <Link className=''>
        <img src={laptop} className="d-block w-100 slider_image" alt="..." />
       </Link>
       </Slider>
     
    </>
  );
};

export default SliderComponent;
