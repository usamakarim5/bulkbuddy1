import React from "react";
import Slider from "react-slick";
import { ElectronicsData } from "../../Data/ElectronicsData";
import CardComponent from "./CardComponent";

const SimilarProducts = () => {

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="slider_next_btn" onClick={onClick}>
        {" "}
        <i class="fa fa-chevron-right slider_icon" aria-hidden="true"></i>
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="slider_prev_btn" onClick={onClick}>
        {" "}
        <i class="fa fa-chevron-left slider_icon" aria-hidden="true"></i>
      </button>
    );
  }

  return (
    <>
      <div className="similar_products">
      <div className="similar_prod_head">
        Similar Products
      </div>
        <Slider {...settings} className="">
        {ElectronicsData.map((item) => (
                <CardComponent item={item} />
              ))}
        </Slider>
      </div>
    </>
  );
};

export default SimilarProducts;
