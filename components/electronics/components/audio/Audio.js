import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../../basic-components/Navbar/Navbar'
import Topbar from '../../../basic-components/Navbar/Topbar'
import SliderComponent from '../../../basic-components/slider/SliderComponent'
import { AppliancesData } from '../../../Data/AppliancesData'


const Audio = () => {
  const {id} = useParams();
  const [sectionName, setSectionName] = useState()


  useEffect(()=>{
    if(id){
      setSectionName(id)
    }
    else{
      setSectionName('Audio')
    }
  },[])

  return (
   <>
   <Navbar/>
    <Topbar/>
   <div className='container-fluid audio_cont'>
   <h5 className='mb-3'>Best of Electronics</h5>
     <div className='col-md-12 top_deals'>
                <div className='top_deals_left'>
                    <h5>Mobile Accessories</h5>
                    <span className='sub_text'>Top Deals</span>
                </div>
                <Link className='btn btn-primary view_all_btn'>View All</Link>
            </div>
           <SliderComponent data = {AppliancesData}/>
          <div className='col-md-12 top_deals'>
                <div className='top_deals_left'>
                    <h5>IT Accessories</h5>
                    <span className='sub_text'>Top Deals</span>
                </div>
                <Link className='btn btn-primary view_all_btn'>View All</Link>
            </div>
            <SliderComponent data = {AppliancesData}/>
          </div>
   </>
  )
}

export default Audio