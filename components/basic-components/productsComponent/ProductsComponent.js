import React from 'react'
import './productCard.css'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductCard from './ProductCard';


const ProductsComponent = (props) => {

  const {sectionName, popularityData, priceData} = props;

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
     <>
     <div className='col-md-10 product_main'>
        <div className='col-md-12 product_head'>
            <div className='head_desc col-md-12'>
                <span className='heading'>{sectionName}</span>
                <span className='description'>Showing 1 – 40 products of 82,946 products</span>
            </div>
           
        </div>
        <div className='tab_cont col-md-12'>
            <TabContext value={value}>
          <TabList onChange={handleChange} className = 'tablist_head'>
          <span className='sortby_head'>Sort By</span>
            <Tab className='sortby_head' label="Popularity" value="1" />
            <Tab className='sortby_head' label="Price - Low to High" value="2" />
            <Tab className='sortby_head' label="Price - High to Low" value="3" />
            <Tab className='sortby_head' label="Newest first" value="3" />
          </TabList>

        <TabPanel className='tabs_item_cont' value="1">
        {popularityData.map((item)=>(
          <ProductCard item = {item}/>
        ))}
        </TabPanel>
        <TabPanel className='tabs_item_cont' value="2">
          {priceData.map((item)=>(
          <ProductCard item = {item}/>
        ))}
        </TabPanel>
        <TabPanel className='tabs_item_cont' value="3">Item Three</TabPanel>
      </TabContext>
            </div>
     </div>
     </>
  )
}

export default ProductsComponent