import React from 'react'
import Slider from 'react-slick';
import { MobilesBrandsData } from '../../Data/MobileBrandsData';
import { Link } from 'react-router-dom';
import topModel from '../../../images/slider-images/mobiles.webp'
import upcoming_launches from '../../../images/Mobilebrands/upcoming.webp'
import launch_model from '../../../images/Mobilebrands/launch_model.webp'
import upcoming_sales from '../../../images/Mobilebrands/upcoming_sales.webp'
import sales_model1 from '../../../images/Mobilebrands/sales_model1.webp'
import sales_model2 from '../../../images/Mobilebrands/sales_model2.webp'
import new_launches from '../../../images/Mobilebrands/new_launches.webp'
import new_launch_model1 from '../../../images/Mobilebrands/new_launch_model1.webp'
import new_launch_model2 from '../../../images/Mobilebrands/new_launch_model2.webp'
import new_launch_model3 from '../../../images/Mobilebrands/new_launch_model3.webp'
import new_launch_model4 from '../../../images/Mobilebrands/new_launch_model4.webp'
import new_launch_model5 from '../../../images/Mobilebrands/new_launch_model5.webp'
import review_model from '../../../images/Mobilebrands/review_model.webp';
import review_model2 from "../../../images/Mobilebrands/review_model2.webp";
import review_model3 from "../../../images/Mobilebrands/review_model3.webp";
import review_model4 from "../../../images/Mobilebrands/review_model4.webp";
import review_model5 from "../../../images/Mobilebrands/review_model5.webp";
import Reviews from '../../reviews/ReviewsComponent';




const MobilesMain = () => {

  var reviewData = [review_model, review_model2,review_model3,review_model4,review_model5]

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      
      };

      function SampleNextArrow(props) {
        const {onClick } = props;
        return (
          <button className="mobile_slider_next_btn" onClick={onClick}>  <i class="fa fa-chevron-right slider_icon" aria-hidden="true"></i></button>
        );
      }
      
      function SamplePrevArrow(props) {
        const {onClick } = props;
        return (
          <button className="mobile_slider_prev_btn" onClick={onClick}>  <i class="fa fa-chevron-left slider_icon" aria-hidden="true"></i></button>
        );
      }
  return (
    <>
    <div className='col-md-10 mobiles_main_cont'>
    <Slider {...settings} className ='mobile_brand_slider'>
       {MobilesBrandsData.map((item,i)=>(
      <div className=' col-md-3 mob_slider_item_cont'>
      <Link className='mob_slider_item' to = {`/home/mobiles/category`}>
      <img className='carousel_image_mob' src= {item.image} alt= 'ssk'/>
      <span className='title_mob'>{item.title}</span>
      </Link>
      </div>
       ))}
       </Slider>
      <Link className='col-md-12 mob_top_model'>
        <img className='mob_top_model_pic' src = {topModel}  alt='img'/>
      </Link>
      <div className='col-md-12 upcoming_launches'>
        <img className='upcoming_launches_pic' src ={upcoming_launches} alt ='img'/>
      </div>
      <Link className='col-md-12 mob_top_model'>
        <img className='mob_top_model_pic' src = {launch_model}  alt='img'/>
      </Link>
      <div className='col-md-12 upcoming_launches'>
        <img className='upcoming_launches_pic' src ={upcoming_sales} alt ='img'/>
      </div>
      <Link className='col-md-12 mob_top_model'>
        <img className='mob_top_model_pic' src = {sales_model1}  alt='img'/>
      </Link>
      <Link className='col-md-12 mob_top_model'>
        <img className='mob_top_model_pic' src = {sales_model2}  alt='img'/>
      </Link>
      <div className='col-md-12 upcoming_launches'>
        <img className='upcoming_launches_pic' src ={new_launches} alt ='img'/>
      </div>
      <Link className='col-md-12 mob_top_model'>
        <img className='mob_top_model_pic' src = {new_launch_model1}  alt='img'/>
      </Link>
      <Link className='col-md-12 mob_top_model'>
        <img className='mob_top_model_pic' src = {new_launch_model2}  alt='img'/>
      </Link>
      <Link className='col-md-12 mob_top_model'>
        <img className='mob_top_model_pic' src = {new_launch_model3}  alt='img'/>
      </Link>
      <Link className='col-md-12 mob_top_model'>
        <img className='mob_top_model_pic' src = {new_launch_model4}  alt='img'/>
      </Link>
      <Link className='col-md-12 mob_top_model'>
        <img className='mob_top_model_pic' src = {new_launch_model5}  alt='img'/>
      </Link>
      <Reviews data = {reviewData}/>
    </div>
    </>
  )
}

export default MobilesMain