import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../basic-components/Navbar/Navbar'
import Topbar from '../basic-components/Navbar/Topbar'
import discount from '../../images/appliances/discount.webp'
import discount_2 from '../../images/appliances/discount_2.webp'
import cat_wash from '../../images/appliances/cat_wash.webp'
import cat_kitchen from '../../images/appliances/cat_kitchen.webp'
import cat_tv from '../../images/appliances/cat_tv.webp'
import cat_ac from '../../images/appliances/cat_ac.webp'
import cat_fans from '../../images/appliances/cat_fans.webp'
import cat_home from '../../images/appliances/cat_home.webp'
import cat_ref from '../../images/appliances/cat_ref.webp'
import cat_micro from '../../images/appliances/cat_micro.webp'
import top_10 from '../../images/appliances/top_10.webp'
import deal_1 from '../../images/appliances/deal_1.webp'
import deal_2 from '../../images/appliances/deal_2.webp'
import deal_3 from '../../images/appliances/deal_3.webp'
import deal_4 from '../../images/appliances/deal_4.webp'
import deal_5 from '../../images/appliances/deal_5.webp'
import deal_6 from '../../images/appliances/deal_6.webp'
import deal_7 from '../../images/appliances/deal_7.webp'
import deal_8 from '../../images/appliances/deal_8.webp'
import deal_9 from '../../images/appliances/deal_9.webp'
import deal_10 from '../../images/appliances/deal_10.webp'
import new_launches from '../../images/appliances/new_launches.webp'
import best_tvs from '../../images/appliances/best_tvs.webp'
import tv_1 from '../../images/appliances/tv_1.webp'
import tv_2 from '../../images/appliances/tv_2.webp'
import tv_3 from '../../images/appliances/tv_3.webp'
import acs from '../../images/appliances/acs.webp'
import ac_1 from '../../images/appliances/ac_1.webp'
import ktchen from '../../images/appliances/ktchen.webp'
import kitchen_1 from '../../images/appliances/kitchen_1.webp'
import wash_machines from '../../images/appliances/wash_machines.webp'
import wash_machine_1 from '../../images/appliances/wash_machine_1.webp'
import { AppliancesData } from '../Data/AppliancesData'
import {ElectronicsData} from '../Data/ElectronicsData'
import Footer from '../basic-components/footer/Footer'
import SliderComponent from '../basic-components/slider/SliderComponent'



const Appliances = () => {

  



  return (
     <>
       <Navbar/>
        <Topbar/>
        <div className='container-fluid col-md-12 appliances_main_cont'>
          <h5 className='mb-3'>TV & Appliances | Sale is Live!</h5>
          <Link className='discount_link col-md-12'>
            <img className = 'discount_image' src = {discount} alt = 'img'></img>
          </Link>
          <Link className='discount_link col-md-12'>
            <img className = 'discount_image' src = {discount_2} alt = 'img'></img>
          </Link>
          <div className='col-md-12 categories_cont'>
            <div className=' cat_col'>
                   <img className='cat_img' src = {cat_wash} alt = 'img'/>
            </div>
            <Link className=' cat_col'>
                   <img className='cat_img' src = {cat_kitchen} alt = 'img'/>
            </Link>
            <Link className=' cat_col'>
                   <img className='cat_img' src = {cat_tv} alt = 'img'/>
            </Link>
            <Link className=' p-0 cat_col'>
                   <img className='cat_img' src = {cat_ac} alt = 'img'/>
            </Link>
          </div>
          <div className='col-md-12 categories_cont'>
            <Link className=' cat_col'>
                   <img className='cat_img' src = {cat_fans} alt = 'img'/>
            </Link>
            <Link className=' cat_col'>
                   <img className='cat_img' src = {cat_home} alt = 'img'/>
            </Link>
            <Link className=' cat_col'>
                   <img className='cat_img' src = {cat_ref} alt = 'img'/>
            </Link>
            <Link className=' p-0 cat_col'>
                   <img className='cat_img' src = {cat_micro} alt = 'img'/>
            </Link>
          </div>
          <div className='discount_link col-md-12'>
            <img className = 'discount_image' src = {top_10} alt = 'img'></img>
          </div>
          <div className='col-md-12 categories_cont'>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {deal_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {deal_2} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {deal_3} alt = 'img'/>
            </Link>
            </div>
            <div className='col-md-12 categories_cont'>
            <Link className=' p-0 deals_col'>
                   <img className='cat_img' src = {deal_4} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {deal_5} alt = 'img'/>
            </Link>
            <Link className=' p-0 deals_col'>
                   <img className='cat_img' src = {deal_6} alt = 'img'/>
            </Link>
            </div>
            <div className='col-md-12 categories_cont'>
            <Link className=' deals_col2'>
                   <img className='cat_img' src = {deal_7} alt = 'img'/>
            </Link>
            <Link className=' deals_col2'>
                   <img className='cat_img' src = {deal_8} alt = 'img'/>
            </Link>
            <Link className=' deals_col2'>
                   <img className='cat_img' src = {deal_9} alt = 'img'/>
            </Link>
            <Link className=' deals_col2'>
                   <img className='cat_img' src = {deal_10} alt = 'img'/>
            </Link>
            </div>
            <div className='discount_link col-md-12'>
            <img className = 'discount_image' src = {new_launches} alt = 'img'></img>
          </div>
          <div className='col-md-12 categories_cont'>
            <Link className=' deals_col2'>
                   <img className='cat_img' src = {deal_7} alt = 'img'/>
            </Link>
            <Link className=' deals_col2'>
                   <img className='cat_img' src = {deal_8} alt = 'img'/>
            </Link>
            <Link className=' deals_col2'>
                   <img className='cat_img' src = {deal_9} alt = 'img'/>
            </Link>
            <Link className=' deals_col2'>
                   <img className='cat_img' src = {deal_10} alt = 'img'/>
            </Link>
            </div>
            <div className='discount_link col-md-12'>
            <img className = 'discount_image' src = {best_tvs} alt = 'img'></img>
          </div>
          <div className='col-md-12 categories_cont'>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {tv_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {tv_2} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {tv_3} alt = 'img'/>
            </Link>
            </div>
            <div className='col-md-12 categories_cont'>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {tv_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {tv_2} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {tv_3} alt = 'img'/>
            </Link>
            </div>
            <div className='discount_link col-md-12'>
            <img className = 'discount_image' src = {acs} alt = 'img'></img>
          </div>
          <div className='col-md-12 categories_cont'>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {ac_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {ac_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {ac_1} alt = 'img'/>
            </Link>
            </div>
            <div className='col-md-12 categories_cont'>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {ac_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {ac_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {ac_1} alt = 'img'/>
            </Link>
            </div>
            <div className='discount_link col-md-12'>
            <img className = 'discount_image' src = {ktchen} alt = 'img'></img>
          </div>
          <div className='col-md-12 categories_cont'>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {kitchen_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {kitchen_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {kitchen_1} alt = 'img'/>
            </Link>
            </div>
            <div className='col-md-12 categories_cont'>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {kitchen_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {kitchen_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {kitchen_1} alt = 'img'/>
            </Link>
            </div>
            <div className='discount_link col-md-12'>
            <img className = 'discount_image' src = {wash_machines} alt = 'img'></img>
          </div>
          <div className='col-md-12 categories_cont'>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {wash_machine_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {wash_machine_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src ={wash_machine_1} alt = 'img'/>
            </Link>
            </div>
            <div className='col-md-12 categories_cont'>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {wash_machine_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src = {wash_machine_1} alt = 'img'/>
            </Link>
            <Link className=' deals_col'>
                   <img className='cat_img' src ={wash_machine_1} alt = 'img'/>
            </Link>
            </div>
            <div className='col-md-12 top_deals'>
                <div className='top_deals_left'>
                    <h5>Top Deals</h5>
                    <span className='sub_text'>on TVs & Appliances</span>
                </div>
                <Link className='btn btn-primary view_all_btn'>View All</Link>
            </div>
          <SliderComponent data = {AppliancesData}/>
          <div className='col-md-12 top_deals'>
                <div className='top_deals_left'>
                    <h5>Top Offers</h5>
                    <span className='sub_text'>on TVs & Appliances</span>
                </div>
                <Link className='btn btn-primary view_all_btn'>View All</Link>
            </div>
           <SliderComponent data = {ElectronicsData}/>
          </div>
         <Footer/>
     </>
  )
}

export default Appliances