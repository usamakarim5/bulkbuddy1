import React, { useState } from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ElectronicsData } from '../../Data/ElectronicsData';
import CardComponent from './CardComponent';
import { AppliancesData } from '../../Data/AppliancesData';
import Slider from 'react-slick';

const BoughtTogather = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };  


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
       Bought Togather
      </div>
      <TabContext value={value}>
          <TabList onChange={handleChange} className = 'tablist_head'>
            <Tab className='sortby_head' label="All Categories" value="1" />
            <Tab className='sortby_head' label="Laptop bags" value="2" />
          </TabList>

        <TabPanel className='bought_togather_cont' value="1">
        <Slider  {...settings} className="">
            {ElectronicsData.map((item)=>(
                <CardComponent item = {item}/>
            ))}
        </Slider>
        </TabPanel>
        <TabPanel className='bought_togather_cont' value="2">
        <Slider  {...settings} className="">
            {AppliancesData.map((item)=>(
                <CardComponent item = {item}/>
            ))}
        </Slider>
        </TabPanel>
       
      </TabContext>
      </div>
  </>
  )
}

export default BoughtTogather