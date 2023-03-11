import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";


const SliderComponent = (props) => {

  const navigate = useNavigate();

    const {data} = props;
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
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
    <Slider {...settings} className='top_deals_slider'>
            {data.map((item, i) => (
              <div className=" car_item"  onClick={()=>{navigate('/home/product/view', {state:item}, {replace: true})}}>
                <img className="carousel_image" src={item.image} alt="ssk" />
                <span className="title">{item.title}</span>
                <span className="description">From {item.price}</span>
                <span className="brand">{item.brand}</span>
              </div>
            ))}
          </Slider>
   </>
  )
}

export default SliderComponent