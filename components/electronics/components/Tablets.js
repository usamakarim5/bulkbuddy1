import React from "react";
import { Link } from "react-router-dom";
import FilterComponent from "../../basic-components/filter/Filter";
import Footer from "../../basic-components/footer/Footer";
import Navbar from "../../basic-components/Navbar/Navbar";
import Topbar from "../../basic-components/Navbar/Topbar";
import SliderComponent from "../../basic-components/slider/SliderComponent";
import tab_banner1 from '../../../images/electronics/tab_banner1.webp'
import tab_banner2 from '../../../images/electronics/tab_banner2.webp'
import { CamerasData } from "../../Data/ElectronicsData";

const Tablets = () => {
 
    
  return (
    <>
      <Navbar/>
      <Topbar/>
      <div className="container-fluid right_cont">
        <FilterComponent/>
        <div className="col-md-10 mobiles_main_cont">
          <Link className="col-md-12 mob_top_model">
            <img className="mob_top_model_pic" src={tab_banner1} alt="img" />
          </Link>
          <Link className="col-md-12 mob_top_model">
            <img className="mob_top_model_pic" src={tab_banner2} alt="img" />
          </Link>
          <Link className="col-md-12 mob_top_model">
            <img className="mob_top_model_pic" src={tab_banner1} alt="img" />
          </Link>
          <SliderComponent data={CamerasData} />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Tablets;
