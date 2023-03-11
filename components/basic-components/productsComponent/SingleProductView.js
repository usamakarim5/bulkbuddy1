import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Navbar/Topbar";
import "./productCard.css";
import side_image1 from "../../../images/prod_main.webp";
import side_image2 from "../../../images/side_image2.webp";
import side_image3 from "../../../images/side_image3.webp";
import offer_tag from "../../../images/offer_tag.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Badge, Progress } from "reactstrap";
import processor from "../../../images/processor.webp";
import ProductCard from "./ProductCard";
import laptop from "../../../images/electronics/laptop.webp";
import { ElectronicsData } from "../../Data/ElectronicsData";
import CardComponent from "./CardComponent";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import rar_bg_image from "../../../images/rar_bg_image.webp";
import ReviewsModel from "./ReviewsModel";
import UserReviews from "./UserReviews";
import ReviewImagesComponent from "./ReviewImagesComponent";
import SimilarProducts from "./SimilarProducts";
import BoughtTogather from "./BoughtTogather";
import RecentlyViewed from "./RecentlyViewed";
import Footer from "../footer/Footer";
import ReactImageMagnify from "react-image-magnify";

const SingleProductView = () => {
  let dummy = { image: laptop };
  const location = useLocation();
  const navigate = useNavigate();
  const ref = useRef(null)
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState(location.state)
  const toggle = () => setModal(!modal);
  const [imageToShow, setImageToShow] = useState(side_image1)


  const scrollDown =() =>{
    ref.current.scrollBy({top: 60, behavior:'smooth'});
}
const scrollUp =() =>{
  ref.current.scrollBy({top: -60, behavior:'smooth'});
}

useEffect(()=>{
  if(location.state){
    setImageToShow(location.state.image)
  }
},[])


useEffect(()=>{
   if(location.state != item){
    navigate(0)
    window.scrollTo(0)
   }
},[location.state])

  return (
    <>
      <Navbar />
      <Topbar />
      <div className="container-fluid single_product_main">
        <div className="sub_div">
          <div className="col-md-5 prod_image_cont">
            <div className="side_images_cont" ref = {ref}>
            <button className="scroll_down_btn" onClick={()=>{scrollDown()}}><i className="fa fa-chevron-down"></i></button>
            <button className="scroll_up_btn" onClick={()=>{scrollUp()}}><i className="fa fa-chevron-up"></i></button>
          
              <div
                className="side_image_div"
                onMouseEnter={() => {
                  setImageToShow(side_image1);
                }}
              >
                <img className="side_image" src={side_image1} alt="img"></img>
              </div>
              <div
                className="side_image_div"
                onMouseEnter={() => {
                  setImageToShow("video");
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                  className="side_image_div"
                />
              </div>
              <div
                className="side_image_div"
                onMouseEnter={() => {
                  setImageToShow(side_image3);
                }}
              >
                <img className="side_image" src={side_image3} alt="img"></img>
              </div>
              <div
                className="side_image_div"
                onMouseEnter={() => {
                  setImageToShow(side_image3);
                }}
              >
                <img className="side_image" src={side_image3} alt="img"></img>
              </div>
              <div
                className="side_image_div"
                onMouseEnter={() => {
                  setImageToShow(side_image3);
                }}
              >
                <img className="side_image" src={side_image3} alt="img"></img>
              </div>
              <div
                className="side_image_div"
                onMouseEnter={() => {
                  setImageToShow(side_image3);
                }}
              >
                <img className="side_image" src={side_image3} alt="img"></img>
              </div>
              <div
                className="side_image_div"
                onMouseEnter={() => {
                  setImageToShow(side_image2);
                }}
              >
                <img className="side_image" src={side_image2} alt="img"></img>
              </div>
              <div
                className="side_image_div"
                onMouseEnter={() => {
                  setImageToShow(side_image1);
                }}
              >
                <img className="side_image" src={side_image1} alt="img"></img>
              </div>
              <div
                className="side_image_div"
                onMouseEnter={() => {
                  setImageToShow(side_image2);
                }}
              >
                <img className="side_image" src={side_image2} alt="img"></img>
              </div>
            </div>
            <div className="prod_main_view">
              <div className="main_view_image_cont">
                <div className="like_icon">
                  <i className="fa fa-heart"></i>
                </div>
                {imageToShow == "video" ? (
                  <iframe
                    src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                  />
                ) : (
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: imageToShow,
                        className: "main_view_image",
                      },
                      largeImage: {
                        src: imageToShow,
                        width: 1200,
                        height: 2500,
                        className: "main_view_image",
                      },
                    }}
                  />
                )}
              </div>
              <div className="buy_butns_div">
                <button className="addCart_btn">add to cart</button>
                <button className="buy_btn">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-7 prod_detail_cont">
            <div className="prod_title">
             {item.title}
            </div>
            <div className="rating_row d-flex mt-1">
              <span class="badge bg-success pill">4.2 ★</span>
              <span className="rating_text">
                87854 Ratings and 6056 Reviews
              </span>
            </div>
            <div className="price_div">
              <span className="extra">Extra 3500 Off</span>
              <div className="price_row">
                <span className="price">{item.price}</span>
                <span className="extra">33%</span>
              </div>
            </div>
            <span className="available_offers">Available Offers</span>
            <div className="offers_cont">
              <span className="offer_list_item">
                <img className="offer_tag" src={offer_tag} alt="img"></img>
                <span>
                  {" "}
                  Bank Offer 5% Cashback on Flipkart Axis Bank Card{" "}
                  <Link className="tc_link">T&C</Link>
                </span>
              </span>
              <span className="offer_list_item">
                <img className="offer_tag" src={offer_tag} alt="img"></img>
                <span>
                  {" "}
                  Bank Offer 5% Cashback on Flipkart Axis Bank Card{" "}
                  <Link className="tc_link">T&C</Link>
                </span>
              </span>
              <span className="offer_list_item">
                <img className="offer_tag" src={offer_tag} alt="img"></img>
                <span>
                  {" "}
                  Bank Offer 5% Cashback on Flipkart Axis Bank Card{" "}
                  <Link className="tc_link">T&C</Link>
                </span>
              </span>
              <span className="offer_list_item">
                <img className="offer_tag" src={offer_tag} alt="img"></img>
                <span>
                  {" "}
                  Bank Offer 5% Cashback on Flipkart Axis Bank Card{" "}
                  <Link className="tc_link">T&C</Link>
                </span>
              </span>
            </div>
            <div className="warranty_cont">
              <div className="warranty_box">
                <span className="warranty">
                  <input type="radio" value=""></input>
                  <span className="ms-3">Without Exchange</span>
                </span>
                <span>39900</span>
              </div>
              <div className="warranty_box">
                <span className="warranty">
                  <input type="radio" value=""></input>
                  <span className="ms-3">With Exchange</span>
                </span>
                <span>45878</span>
              </div>
            </div>
            <div className="delivery_row">
              <span className="left_head">Delivery</span>
              <div className="right_detail">
                <TextField
                  className="pin_text col-6"
                  id="standard-basic"
                  label={` Enter Delivery Pin Code`}
                  variant="standard"
                  size="small"
                />
                <span className="mt-2">
                  Delivery By 8 March, Wednesday{" "}
                  <span className="extra">Free</span>
                </span>
                <span className="sub_delivery">If order before 2PM</span>
              </div>
            </div>
            <div className="delivery_row">
              <span className="left_head">Highlights</span>
              <div className="right_detail">
                <ul className="p-0">
                  <li className="highlights">
                    Stylish & Portable Thin and Light Laptop
                  </li>
                  <li className="highlights">
                    15.6 inch Full HD Anti glare display, 81.8% Screen to Body
                    ratio and DC Dimming
                  </li>
                  <li className="highlights">
                    Light Laptop without Optical Disk Drive
                  </li>
                </ul>
              </div>
            </div>
            <div className="delivery_row">
              <span className="left_head">Important Note</span>
              <div className="right_detail">
                The Windows 11 Upgrade rollout plan is scheduled to begin in
                late 2021 and will continue into 2022. The specific timing will
                vary as per the device.
              </div>
            </div>
            <div className="delivery_row">
              <span className="left_head">Sellar</span>
              <div className="right_detail">
                <Link className="tc_link mb-2">
                  RetailNet{" "}
                  <Badge className="p-1" color="primary">
                    {" "}
                    4.5<i className="fa fa-star"></i>
                  </Badge>
                </Link>
                <ul className="p-0">
                  <li className="highlights">
                    7 day seller replacement policy/brand assistance for device
                    issues*
                  </li>
                  <li className="highlights">GST invoice available</li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 pro-description_cont">
              <div className="prod_detail_heading">Product description</div>
              <div className="pro_desc_row">
                <div className="pro_desc_image_cont">
                  <img className="pro_desc_image" src={processor} alt="img" />
                </div>
                <div className="pro_desc_detail">
                  <span className="pro_desc_heading">Efficient Processor</span>
                  <span>
                    Equipped with the 11th Generation TigerLake Intel Core
                    i5-11300H H35 processor, the RedmiBook Pro Notebook delivers
                    superior performance. So, whether you want to use it for
                    work or to watch videos or play games, this notebook helps
                    meet all your computing requirements.
                  </span>
                </div>
              </div>
              <div className="pro_desc_row">
                <div className="pro_desc_image_cont">
                  <img className="pro_desc_image" src={processor} alt="img" />
                </div>
                <div className="pro_desc_detail">
                  <span className="pro_desc_heading">Efficient Processor</span>
                  <span>
                    Equipped with the 11th Generation TigerLake Intel Core
                    i5-11300H H35 processor, the RedmiBook Pro Notebook delivers
                    superior performance. So, whether you want to use it for
                    work or to watch videos or play games, this notebook helps
                    meet all your computing requirements.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12 pro-description_cont">
              <div className="specs_cont">
                <div className="prod_detail_heading">Specifications</div>
                <h6 className="ms-3 mt-4">General</h6>
                <div className="delivery_row ps-3">
                  <span className="left_head">Sales Package</span>
                  <div className="right_detail">
                    1 Laptop, 1 Power Adaptor, 1 Power cord, User Manual
                  </div>
                </div>
                <div className="delivery_row ps-3">
                  <span className="left_head">Model Number</span>
                  <div className="right_detail">JYU4431IN/JYU4446IN</div>
                </div>
                <div className="delivery_row ps-3">
                  <span className="left_head">Model Name</span>
                  <div className="right_detail">RedmiBook 15 Pro</div>
                </div>
                <div className="delivery_row ps-3">
                  <span className="left_head">Series</span>
                  <div className="right_detail">15 Pro</div>
                </div>
                <div className="delivery_row ps-3">
                  <span className="left_head">Type</span>
                  <div className="right_detail">Thin and light Laptop</div>
                </div>
                <div className="delivery_row ps-3">
                  <span className="left_head">Battery Backup</span>
                  <div className="right_detail">Upto 10 hours</div>
                </div>
              </div>
              <div className="specs_cont">
                <h6 className="ms-3 mt-4">Processor And Memory Features</h6>
                <div className="delivery_row ps-3">
                  <span className="left_head">Sales Package</span>
                  <div className="right_detail">
                    1 Laptop, 1 Power Adaptor, 1 Power cord, User Manual
                  </div>
                </div>
                <div className="delivery_row ps-3">
                  <span className="left_head">Model Number</span>
                  <div className="right_detail">JYU4431IN/JYU4446IN</div>
                </div>
                <div className="delivery_row ps-3">
                  <span className="left_head">Model Name</span>
                  <div className="right_detail">RedmiBook 15 Pro</div>
                </div>
                <div className="delivery_row ps-3">
                  <span className="left_head">Series</span>
                  <div className="right_detail">15 Pro</div>
                </div>
                <div className="delivery_row ps-3">
                  <span className="left_head">Type</span>
                  <div className="right_detail">Thin and light Laptop</div>
                </div>
                <div className="delivery_row ps-3">
                  <span className="left_head">Battery Backup</span>
                  <div className="right_detail">Upto 10 hours</div>
                </div>
              </div>
            </div>
            <div className="col-md-12 pro-description_cont">
              <div className="prod_detail_heading">
                Frequently Bought Togather
              </div>
              <div className="d-flex justify-content-center flex-wrap">
                {ElectronicsData.map((item) => (
                  <CardComponent item={item} />
                ))}
              </div>
              <div className="bought_togather_footer">
                <div className="bought_footer">
                  <span>Item</span>
                  <b>39900</b>
                </div>
                +
                <div className="bought_footer">
                  <span>Add Ons</span>
                  <b>3545</b>
                </div>
                =<b>43340</b>
                <button className="addCart_btn">Add to cart</button>
              </div>
            </div>
            <div className="col-md-12 pro-description_cont">
              <div className="reviews_and_rating_head">
                <span className="rar_heading">Reviews & Ratings</span>
                <button className="r_and_r_head_btn">Rate Product</button>
              </div>
              <div className="rar_icons_cont">
                <div className="rar_icons_left">
                  <div className="rate_div">
                    <span> 4.1 ★</span>
                    <span className="rar_text">4059 Ratings & 400 Reviews</span>
                  </div>
                  <div className="rar_progress_bar_cont">
                    <div className="rating_row">
                      <span>5 ★</span>
                      <Progress
                        className="progress"
                        color="success"
                        value={100}
                      />
                      <span className="rar_rating">2345</span>
                    </div>
                    <div className="rating_row">
                      <span>4 ★</span>
                      <Progress
                        className="progress"
                        color="success"
                        value={30}
                      />
                      <span className="rar_rating">2345</span>
                    </div>
                    <div className="rating_row">
                      <span>3 ★</span>
                      <Progress
                        className="progress"
                        color="success"
                        value={10}
                      />
                      <span className="rar_rating">2345</span>
                    </div>
                    <div className="rating_row">
                      <span>2 ★</span>
                      <Progress
                        className="progress"
                        color="warning"
                        value={20}
                      />
                      <span className="rar_rating">2345</span>
                    </div>
                    <div className="rating_row">
                      <span>1 ★</span>
                      <Progress
                        className="progress"
                        color="danger"
                        value={20}
                      />
                      <span className="rar_rating">2345</span>
                    </div>
                  </div>
                </div>
                <div className="rar_icons_right">
                  <div className="rar_loader_cont">
                    <CircularProgressbar
                      styles={{
                        path: {
                          stroke: "#198754",
                        },
                        text: {
                          color: "#198754",
                          fontSize: "25px",
                          fill: "#198754",
                          fontWeight: "bold",
                        },
                      }}
                      className="spinner"
                      value={80}
                      text={`4.1`}
                    />
                    <span className="mt-2">Performance</span>
                  </div>
                  <div className="rar_loader_cont">
                    <CircularProgressbar
                      styles={{
                        path: {
                          stroke: "#198754",
                        },
                        text: {
                          color: "#198754",
                          fontSize: "25px",
                          fill: "#198754",
                          fontWeight: "bold",
                        },
                      }}
                      className="spinner"
                      value={80}
                      text={`4.1`}
                    />
                    <span className="mt-2">Design</span>
                  </div>
                  <div className="rar_loader_cont">
                    <CircularProgressbar
                      styles={{
                        path: {
                          stroke: "#198754",
                        },
                        text: {
                          color: "#198754",
                          fontSize: "25px",
                          fill: "#198754",
                          fontWeight: "bold",
                        },
                      }}
                      className="spinner"
                      value={80}
                      text={`4.1`}
                    />
                    <span className="mt-2">Display</span>
                  </div>
                  <div className="rar_loader_cont">
                    <CircularProgressbar
                      styles={{
                        path: {
                          stroke: "#198754",
                        },
                        text: {
                          color: "#198754",
                          fontSize: "25px",
                          fill: "#198754",
                          fontWeight: "bold",
                        },
                      }}
                      className="spinner"
                      value={80}
                      text={`4.1`}
                    />
                    <span className="mt-2">Battery</span>
                  </div>
                </div>
              </div>
              <div className="rar_images_cont">
                <ReviewImagesComponent toggle={toggle} />
                <ReviewImagesComponent toggle={toggle} />
                <ReviewImagesComponent toggle={toggle} />
                <ReviewImagesComponent toggle={toggle} />
                <ReviewsModel
                  modal={modal}
                  setModal={setModal}
                  toggle={toggle}
                />
              </div>
              <UserReviews />
              <UserReviews />
              <UserReviews />
            </div>
          </div>
        </div>
        <SimilarProducts />
        <BoughtTogather />
        <RecentlyViewed />
      </div>
      <Footer />
    </>
  );
};

export default SingleProductView;
