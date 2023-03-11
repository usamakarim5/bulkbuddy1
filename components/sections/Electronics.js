import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Slider from 'react-slick';
import { ElectronicsData } from '../Data/ElectronicsData'


const Electronics = () => {

  const navigate = useNavigate();

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
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
     <div className='col-md-12  sections'>
        <div className='col-md-2 px-2 pt-2 section_main'>
           <span className='section_head'>Best of Electronics</span>
           <button className="btn btn-primary view_all_btn" onClick={()=>{navigate('/home/top-offers', {state:ElectronicsData}, {replace: true})}}>View all</button>
        </div>
       
        <div className='col-md-10'>
        <Slider {...settings}>
       {ElectronicsData.map((item,i)=>(
        <div className=' car_item' onClick={()=>{navigate('/home/product/view', {state: item}, {replace: true})}}>
      <img className='carousel_image' src= {item.image} alt= 'ssk'/>
      <span className='title'>{item.title}</span>
      <span className='description'>From {item.price}</span>
      <span className='brand'>{item.brand}</span>
      </div>
       ))}
       </Slider>
        </div>
     </div>
    </>
  )
}

export default Electronics

