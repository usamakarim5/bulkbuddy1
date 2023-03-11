import React from 'react'
import { Link } from 'react-router-dom'
import './mobile-screen.css'
import electronics from "../../images/processor.webp";
import MobileNavbar from './mobile-navbar/mobileNavbar';
import mobiles from "../../images/mobiles_small.webp";
import category from "../../images/category.png";
import electronics_cat from "../../images/electronics_small.webp";
import appliances from "../../images/appliances_small.webp";
import asset_watch from "../../images/asset_watch.webp";
import asset_watch2 from "../../images/asset_watch2.webp";
import asset_mobile from "../../images/asset_mobile.webp";
import sponsored1 from "../../images/sponsored1.webp";
import sponsored2 from "../../images/sponsored2.webp";
import sponsored3 from "../../images/sponsored3.webp";
import sponsored4 from "../../images/sponsored4.webp";
import recently1 from "../../images/recently1.webp";
import recently2 from "../../images/recently2.webp";
import recently3 from "../../images/recently3.webp";
import recently4 from "../../images/recently4.webp";
import mobile_slider1 from '../../images/mobile_slider1.webp'
import mobile_slider2 from '../../images/mobile_slider2.webp'
import mobile_slider3 from '../../images/mobile_slider3.webp'
import recomended1 from '../../images/recomended1.webp'
import recomended2 from '../../images/recomended2.webp'
import recomended3 from '../../images/recomended3.webp'
import couple_image from '../../images/couple_image.webp'
import couple_image2 from '../../images/couple_image2.webp'

import Slider from "react-slick";




const mobilesHome = () => {


  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,

  };



  return (
 <>
 <MobileNavbar/>
      <div className="mobile_screen">
      <div className='ms_categories'>
      <Link
        className="categories_items d-flex justfiy-content-center align-items-center flex-column "
        to={`/home/mobiles`}>
        <img className="ms_category_image" src={category}></img>
      </Link>
      <Link
        className="categories_items d-flex justfiy-content-center align-items-center flex-column "
        to={`/home/mobiles`}>
        <img className="ms_category_image" src={mobiles}></img>
      </Link>
      <Link
        className="categories_items d-flex justfiy-content-center align-items-center flex-column "
        to={`/home/mobiles`}>
        <img className="ms_category_image" src={electronics_cat}></img>
      </Link>
      <Link
        className="categories_items d-flex justfiy-content-center align-items-center flex-column "
        to={`/home/mobiles`}>
        <img className="ms_category_image" src={appliances}></img>
      </Link>
      </div>
      <Slider {...settings} className = 'mobile_slider'>
            <img src = {mobile_slider1} alt = 'pic' className='mobile_slider_image'/>
            <img src = {mobile_slider2} alt = 'pic'/>
            <img src = {mobile_slider3} alt = 'pic'/>
      </Slider>
          <div className="mobile_view_latest">
            <Link className="mv_latest_image_cont">
              <img
                className="mv_latest_image"
                src={asset_watch}
                alt="img"
              ></img>
            </Link>
            <Link className="mv_latest_image_cont">
              <img
                className="mv_latest_image"
                src={asset_mobile}
                alt="img"
              ></img>
            </Link>
            <Link className="mv_latest_image_cont">
              <img
                className="mv_latest_image"
                src={asset_watch2}
                alt="img"
              ></img>
            </Link>
          </div>
          <div className="special_offers">
            <div className="special_offers_head">
              <span>Special Offers, Curated for You</span>
              <Link className="mv_link_btn">
                <i className="fa fa-chevron-right mv_link_icon"></i>
              </Link>
            </div>
            <div className="special_offers_main">
              <Link className=" sp_image_link">
                <img className="sp_image" src={sponsored1} alt="img"></img>
                 <div className='sp_image_text'>Slippers & Flip Flops</div>
                 <div className='sp_image_sub'>Min 70% Off</div>
              </Link>
              <Link className=" sp_image_link">
                <img className="sp_image" src={sponsored2} alt="img"></img>
                <div className='sp_image_text'>Slippers & Flip Flops</div>
                 <div className='sp_image_sub'>Min 70% Off</div>
              </Link>
              <Link className=" sp_image_link">
                <img className="sp_image" src={sponsored3} alt="img"></img>
                <div className='sp_image_text'>Slippers & Flip Flops</div>
                 <div className='sp_image_sub'>Min 70% Off</div>
              </Link>
              <Link className=" sp_image_link">
                <img className="sp_image" src={sponsored4} alt="img"></img>
                <div className='sp_image_text'>Slippers & Flip Flops</div>
                 <div className='sp_image_sub'>Min 70% Off</div>
              </Link>
            </div>
          </div>
          <div className="sponsored">
            <div className="sponsored_head">
              <span>Recently Viewed Stores</span>
            </div>
            <div className="mobile_view_recent_stores">
              <Link className="recently_image_cont col-3">
                <img
                  className="recently_image"
                  src={recently1}
                  alt="img"
                ></img>
                <span className='mt-2'>Mobile</span>
              </Link>
              <Link className="recently_image_cont col-3 ">
                <img
                  className="recently_image"
                  src={recently2}
                  alt="img"
                ></img>
                <span className='mt-2'>Mobile</span>
              </Link>
              <Link className="recently_image_cont col-3 ">
                <img
                  className="recently_image"
                  src={recently3}
                  alt="img"
                ></img>
                <span className='mt-2'>Mobile</span>
              </Link>
              <Link className="recently_image_cont col-3 ">
                <img
                  className="recently_image"
                  src={recently4}
                  alt="img"
                ></img>
                <span className='mt-2'>Mobile</span>
              </Link>
              <Link className="recently_image_cont col-3 ">
                <img
                  className="recently_image"
                  src={recently4}
                  alt="img"
                ></img>
                <span className='mt-2'>Mobile</span>
              </Link>
              <Link className="recently_image_cont col-3 ">
                <img
                  className="recently_image"
                  src={recently4}
                  alt="img"
                ></img>
                <span className='mt-2'>Mobile</span>
              </Link>
              <Link className="recently_image_cont col-3">
                <img
                  className="recently_image"
                  src={recently4}
                  alt="img"
                ></img>
                <span className='mt-2'>Mobile</span>
              </Link>
            </div>
          </div>
          <div className="recommend">
            <div className="recomended_head">
            <div className='recomended_head_left'>
            <span>Recommended Items</span>
              <sub className='recomended_sub'>Based on Your Interest</sub>
            </div>
      
              <Link className=" recomended_view_all_btn">View All</Link>
            </div>
            <div className="popular_main">
              <Link className="col-8 recomended_left">
                <img
                  className="popular_image"
                  src={recomended1}
                  alt="img"
                ></img>
                <div className='recomend_item_title'>
                  kuber enterpirser new min airbuds
                </div>
                <div className='recomended_item_sub'>
                  <b>180</b>
                  <span className='sp_image_sub ms-1'>20% Off</span>
                </div>
              </Link>
              <div className='col-4 recomended_right'>
              <Link className="col-12 popular_image_link_right">
                <img
                  className="popular_image_right"
                  src={recently2}
                  alt="img"
                ></img>
                <div className='recomend_item_title_right'>
                  kuber enterpirser new min airbuds
                </div>
                <div className='recomended_item_sub'>
                  <b>180</b>
                  <span className='sp_image_sub_right ms-1'>20% Off</span>
                </div>
              </Link>
              <Link className="col-12 popular_image_link_right">
                <img
                  className="popular_image_right"
                  src={recomended3}
                  alt="img"
                ></img>
                <div className='recomend_item_title_right'>
                  kuber enterpirser new min airbuds
                </div>
                <div className='recomended_item_sub'>
                  <b>180</b>
                  <span className='sp_image_sub_right ms-1'>20% Off</span>
                </div>
              </Link>
              </div>
            </div>
          </div>
       <div className='two_images_cont mb-3'>
           <Link className='two_image_link'>
            <img src ={couple_image} alt = 'pic' className='c_image'></img>
           </Link>
           <Link className='two_image_link'>
            <img src ={couple_image2} alt = 'pic' className='c_image'></img>
           </Link>
       </div>
       <div className="special_offers">
            <div className="special_offers_head">
              <span>Special Offers, Curated for You</span>
              <Link className="mv_link_btn">
                <i className="fa fa-chevron-right mv_link_icon"></i>
              </Link>
            </div>
            <div className="special_offers_main">
              <Link className=" sp_image_link">
                <img className="sp_image" src={sponsored1} alt="img"></img>
                 <div className='sp_image_text'>Slippers & Flip Flops</div>
                 <div className='sp_image_sub'>Min 70% Off</div>
              </Link>
              <Link className=" sp_image_link">
                <img className="sp_image" src={sponsored2} alt="img"></img>
                <div className='sp_image_text'>Slippers & Flip Flops</div>
                 <div className='sp_image_sub'>Min 70% Off</div>
              </Link>
              <Link className=" sp_image_link">
                <img className="sp_image" src={sponsored3} alt="img"></img>
                <div className='sp_image_text'>Slippers & Flip Flops</div>
                 <div className='sp_image_sub'>Min 70% Off</div>
              </Link>
              <Link className=" sp_image_link">
                <img className="sp_image" src={sponsored4} alt="img"></img>
                <div className='sp_image_text'>Slippers & Flip Flops</div>
                 <div className='sp_image_sub'>Min 70% Off</div>
              </Link>
            </div>
          </div>
       <div className='two_images_cont mb-3'>
           <Link className='two_image_link'>
            <img src ={couple_image} alt = 'pic' className='c_image'></img>
           </Link>
           <Link className='two_image_link'>
            <img src ={couple_image2} alt = 'pic' className='c_image'></img>
           </Link>
       </div>
       <div className='two_images_cont mb-3'>
           <Link className='two_image_link'>
            <img src ={couple_image} alt = 'pic' className='c_image'></img>
           </Link>
           <Link className='two_image_link'>
            <img src ={couple_image2} alt = 'pic' className='c_image'></img>
           </Link>
       </div>
        </div>
 </>
  )
}

export default mobilesHome