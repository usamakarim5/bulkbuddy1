import React, { useState } from "react";
import BeforeLoginNavbar from "./components/navbar";
import chevronDown from "../../images/chevron-down.png";
import mobile_cat from "../../images/mobile_cat.png";
import { Link } from "react-router-dom";
import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import apple_icon from "../../images/apple_icon.webp";
import playstore_icon from "../../images/playstore_icon.webp";
import judge from "../../images/judge.png";
import cello from "../../images/cello.png";
import cipla from "../../images/cipla.png";
import Footer from "../basic-components/footer/Footer";
import video from "../../images/video.mp4";
import video2 from "../../images/video2.mp4";
import review1 from "../../images/review1.mp4";
import bulb from '../../images/bulb.png'
import toys from '../../images/toys.png'
import home from '../../images/home.png'
import renewed from '../../images/renewed.png'
import fulfilment from '../../images/fulfilment.png'
import bag from '../../images/bag.png'
import foot from '../../images/foot.png'
import Login from "./components/Login";

const BeforeLogin = () => {

  const categories =[
    "Deals of the Day",
    "Mobiles",
    "Laptop & Desktop",
    "Tablets",
    "Smart Wearables",
    "Headphones",
    "Computer Peripheral",
    "Mobiles Protection",
    "Power Banks",
    "Power Gears",
    "Speakers",
    "Data Storage",
    "Home Audios",
    "Monitors",
    "Renewed",
    "Insure"
  ];
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  
  return (
    <>
    <Login toggle = {toggle} modal = {modal}/>
      <BeforeLoginNavbar  toggle = {toggle} modal = {modal} />
      <div className="bl_register_cont">
       <div className ='bl_reg_left'>
       <h2 className="bl_reg_head">
          India's largest B2B Platform for businesses & shop-owners
        </h2>  
        <button className="bl_reg_btn">
          Register <i className="fa fa-arrow-right ms-2"></i>
        </button>  
       </div>
       <div className="chevron_cont">
        <div className="bl_reg_icon">
          {/* <img src={chevronDown} alt="image" className="bl_reg_chev_down"></img> */}
          <i className="fa fa-chevron-down bl_reg_chev_down"></i>
        </div>
        </div>
      </div>
      <div className="bl_categories_main">
        <div className="bl_categories_inner">
          <span className="bl_cate_title">Categories</span>
          <div className="bl_cate_desc">
            <p className="bl_desc_p">More than</p>
            <p className="bl_desc_p_center">5 lakh</p>
            <p className="bl_desc_p">Prouducts</p>
          </div>
        </div>
        <div className="bl_cate_cont">
          <div className="bl_cate_col">
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={mobile_cat} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                  Mobiles
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={bulb} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                    Deals of the Day
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={toys} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                   Laptop & Desktop
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={home} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                     Tablets
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={home} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                     Home Audios
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="vl"></div>
          <div className="bl_cate_col">
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={renewed} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                    Smart Wearables
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={fulfilment} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                  Headphones
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={bag} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                   Computer Peripheral
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={mobile_cat} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                    Mobiles Protection
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={mobile_cat} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                  	Monitors
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="vl"></div>
          <div className="bl_cate_col">
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={foot} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                    Power Banks
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={bulb} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                  Power Gears
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={home} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                   Speakers
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={fulfilment} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                    Data Storage
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bl_cat_item">
              <div className="bl_cat_image_cont">
                <img src={bag} alt="img" className="bl_cat_image"></img>
              </div>
              <div className="bl_cat_right_cont">
                <div className="bl_cat_right_inner">
                  <span className="bl_cat_item_title">
                    Renewed
                  </span>
                  <span className="bl_cat_item_desc">
                    Mobille Accessories, IT Accessories, COVID Essentials
                  </span>
                </div>
                <div className="bl_cat_item_arrow">
                  <div className="bl_cat_item_arrow_cont">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="bl_steps_cont">
          <p className="bl_desc_p">Start trading in 3 simple steps</p>
          <div className="bl_steps_main">
            <div className="bl_steps_col">
              <div className="bl_steps_image_cont">
                <img className="bl_steps_image" src={step1} alt=""></img>
              </div>
              <p className="bl_steps_image_title">Create an account</p>
              <p className="bl_steps_image_desc">
                Register using your mobile number. Enter your Name, Shop name
                and Pincode
              </p>
            </div>
            <div className="bl_steps_col">
              <div className="bl_dashed_border"></div>
            </div>
            <div className="bl_steps_col">
              <div className="bl_steps_image_cont">
                <img className="bl_steps_image" src={step2} alt=""></img>
              </div>
              <p className="bl_steps_image_title">Complete shop KYC</p>
              <p className="bl_steps_image_desc">
                Upload any one of shop's KYC documents like GSTIN, Shop &
                Establishment Licence
              </p>
            </div>
            <div className="bl_steps_col">
              <div className="bl_dashed_border"></div>
            </div>
            <div className="bl_steps_col">
              <div className="bl_steps_image_cont">
                <img className="bl_steps_image" src={step3} alt=""></img>
              </div>
              <p className="bl_steps_image_title">Start Ordering</p>
              <p className="bl_steps_image_desc">
                Browse and order products for your shop from top sellers &
                brands
              </p>
            </div>
          </div>
        </div>
        <div className="bl_reg_btn_row">
          <button className="bl_reg_btn">
            Register <i className="fa fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
      <div className="welcome_cont">
        <div className="welcome_left">
          <span className="bl_cate_title">Wellcome to bulkbuddy</span>
          <p className="bl_desc_p">Buy stocks for your shop/business easily</p>
          <video muted autoPlay={"autoplay"} preLoad="auto" loop className="loop_video">
            <source type="video/mp4" src={video} />
          </video>
        </div>
        <div className="welcome_right">
          <div className="welcome_right_right">
            <div className="welcome_features_div">
              <div className="welcome_features_div_inner">
                <p className="welcome_desc">Great</p>
                <p className="welcome_desc_center">wholesale</p>
                <p className="welcome_desc">prices</p>
              </div>
              <span className="welcome_desc_sub">
                Avail best prices on 5 Lakh+ top quality products
              </span>
            </div>
            <div className="welcome_features_div">
              <div className="welcome_features_div_inner">
                <p className="welcome_desc">Wide range from top</p>
                <p className="welcome_desc_center">sellers & brands</p>
              </div>
              <span className="welcome_desc_sub">
                Shop from 25,000 top sellers across India
              </span>
            </div>
            <div className="welcome_features_div">
              <div className="welcome_features_div_inner">
                <p className="welcome_desc">Smart</p>
                <p className="welcome_desc_center">returns</p>
              </div>
              <span className="welcome_desc_sub">
                Enjoy simple & hassle-free returns processts
              </span>
            </div>
          </div>
          <div className="welcome_right_left">
            <div className="welcome_features_div_left">
              <div className="welcome_features_div_inner">
                <p className="welcome_desc">Quick</p>
                <p className="welcome_desc_center">Doorstep Delivery</p>
              </div>
              <span className="welcome_desc_sub">
                Get delivery of your orders at your doorstep
              </span>
            </div>
            <div className="welcome_features_div_left">
              <div className="welcome_features_div_inner">
                <p className="welcome_desc">Credit upto</p>
                <p className="welcome_desc_center">₹5 Lakhs</p>
              </div>
              <span className="welcome_desc_sub">
                Avail credit facility upto ₹5 Lakhs
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="join_cont">
        <span className="join_title">Join India's largest B2B platform</span>
        <div className="join_stats_row">
          <div className="join_single_stat">
            <span>30 L+</span>
            <h3 className="stat_sub">Retailers</h3>
          </div>
          <div className="join_single_stat">
            <h2 className="stat_center">25 k+</h2>
            <h3 className="stat_sub">Sellars</h3>
          </div>
          <div className="join_single_stat">
            <span>900+</span>
            <h3 className="stat_sub">Cities</h3>
          </div>
        </div>
        <div className="bl_reg_btn_row">
          <button className="bl_reg_btn_stats">
            Register <i className="fa fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
      <div className="powerful_cont">
        <div className="powerful_left">
          <p className="bl_desc_p">
            A powerful mobile app for quick & easy buying
          </p>
          <div className="feature_list_cont">
            <div className="feature_item">
              <p className="feature_title">Best Offers and Deals</p>
              <p className="features_sub">
                Enjoy Great Margin, Discounts on proudcts during sale Events
              </p>
            </div>
            <div className="feature_item">
              <p className="feature_title">Easy browsing and ordering</p>
              <p className="features_sub">
                Enjoy Great Margin, Discounts on proudcts during sale Events
              </p>
            </div>
            <div className="feature_item">
              <p className="feature_title">Safe Payment Options</p>
              <p className="features_sub">
                Enjoy Great Margin, Discounts on proudcts during sale Events
              </p>
            </div>
          </div>
          <div className="powerful_download_cont">
            <p className="download_title">Download bulkbuddy app</p>
            <div className="download_images_cont">
              <img
                className="download_image me-4"
                src={apple_icon}
                alt="img"
              ></img>
              <img
                className="download_image"
                src={playstore_icon}
                alt="img"
              ></img>
            </div>
          </div>
        </div>
        <div className="powerful_right">
           <video muted autoPlay={"autoplay"} preLoad="auto" loop className="loop_video">
            <source type="video/mp4" src={video2} />
          </video>
        </div>
      </div>
      <div className="top_brands_cont">
        <p className="top_brands_title">Top brands across all categories</p>
        <div className="scroll_brands_div">
          <div className="scroll_brand">
            <div className="d-flex mb-5">
              <img className="scroll_image" src={judge} alt="imag"></img>
              <img className="scroll_image" src={cello} alt="imag"></img>
              <img className="scroll_image" src={cipla} alt="imag"></img>
              <img className="scroll_image" src={judge} alt="imag"></img>
              <img className="scroll_image" src={cello} alt="imag"></img>
              <img className="scroll_image" src={cipla} alt="imag"></img>
              <img className="scroll_image" src={judge} alt="imag"></img>
              <img className="scroll_image" src={cello} alt="imag"></img>
              <img className="scroll_image" src={cipla} alt="imag"></img>
            </div>
            <div className="d-flex mb-5">
              <img className="scroll_image" src={judge} alt="image"></img>
              <img className="scroll_image" src={cello} alt="imag"></img>
              <img className="scroll_image" src={cipla} alt="imag"></img>
              <img className="scroll_image" src={judge} alt="imag"></img>
              <img className="scroll_image" src={cello} alt="imag"></img>
              <img className="scroll_image" src={cipla} alt="imag"></img>
              <img className="scroll_image" src={judge} alt="imag"></img>
              <img className="scroll_image" src={cello} alt="imag"></img>
              <img className="scroll_image" src={cipla} alt="imag"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="user_reviews_cont">
        <div className="user_reviews_left">
          <p className="bl_desc_p">Empowering businesses across India</p>
          <span className="user_review_text">
            Hear what our customers have to say about their experience with
            bulkbuddy
          </span>
          <video muted controls preLoad="auto" loop className="user_img_left">
            <source type="video/mp4" src={review1} />
          </video>
        </div>
        <div className="user_reviews_right">
          <div className="user_reviews_right_left">
            <video controls muted preLoad="auto" loop className="user_img_right_left">
            <source type="video/mp4" src={review1} />
          </video>
          <video controls muted preLoad="auto" loop className="user_img_right_left">
            <source type="video/mp4" src={review1} />
          </video>
          </div>
          <div className="user_reviews_right_right">
          <video controls muted preLoad="auto" loop className="user_img_right_left">
            <source type="video/mp4" src={review1} />
          </video>
          <video controls muted preLoad="auto" loop className="user_img_right_left">
            <source type="video/mp4" src={review1} />
          </video>
          </div>
        </div>
      </div>
      <div className="bottom_download_cont">
        <div className="bd_left">
          <p className="bd_left_head">Download bulkbuddy app now!</p>
          <span className="bd_left_text">
            Download the app from below links
          </span>
          <div className="download_images_cont">
              <img
                className="download_image me-4"
                src={apple_icon}
                alt="img"
              ></img>
              <img
                className="download_image"
                src={playstore_icon}
                alt="img"
              ></img>
            </div>
        </div>
        <div className="bd_right">
        <button className="bl_reg_btn_stats">
            Register <i className="fa fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeforeLogin;
