import React from "react";
import Navbar from "../basic-components/Navbar/Navbar";
import Slider from "../Slider";
import Categories from "../Categories";
import Electronics from "../sections/Electronics";
import TopDeals from "../sections/TopDeals";
import Appliances from "../sections/Appliances";
import SliderComponent from "../Slider";
import Footer from "../basic-components/footer/Footer";



const Home = () => {
  return (
    <>
    <Navbar/>
      <Categories />
      <div className="container-fluid section_cont">
        <SliderComponent />
        <div className="desktop_screen">
          <Electronics />
          <TopDeals />
          <Appliances />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
