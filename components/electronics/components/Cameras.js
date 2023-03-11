import React from "react";
import FilterComponent from "../../basic-components/filter/Filter";
import Navbar from "../../basic-components/Navbar/Navbar";
import Topbar from "../../basic-components/Navbar/Topbar";
import cam_banner1 from '../../../images/electronics/cam_banner1.webp'
import cam_banner2 from '../../../images/electronics/cam_banner2.webp'
import cam_banner3 from '../../../images/electronics/cam_banner3.webp'
import { Link } from "react-router-dom";
import SliderComponent from "../../basic-components/slider/SliderComponent";
import { CamerasData } from "../../Data/ElectronicsData";
import Reviews from "../../reviews/ReviewsComponent";
import Footer from '../../basic-components/footer/Footer'

const Cameras = () => {
   var reviewsData = [CamerasData[0].image, CamerasData[1].image]
  return (
    <>
      <Navbar />
      <Topbar />
      <div className="container-fluid right_cont">
        <FilterComponent />
        <div className="col-md-10 mobiles_main_cont">
          <Link className="col-md-12 mob_top_model">
            <img className="mob_top_model_pic" src={cam_banner1} alt="img" />
          </Link>
          <Link className="col-md-12 mob_top_model">
            <img className="mob_top_model_pic" src={cam_banner3} alt="img" />
          </Link>
          <Link className="col-md-12 mob_top_model">
            <img className="mob_top_model_pic" src={cam_banner2} alt="img" />
          </Link>
          <SliderComponent data = {CamerasData}/>
          <Reviews data = {reviewsData}/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cameras;
