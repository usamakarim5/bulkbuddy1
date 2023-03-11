import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Topbar from '../Navbar/Topbar'
import CardComponent from './CardComponent'

const TopOffers = () => {
  const location = useLocation()
  let Data = location.state
  console.log('location state', location.state)
  return (
    <>
        <Navbar/>
        <Topbar/>
        <div className='container-fluid view_all_cont'>
         <div className='view_all_title'>
            <span>Offers</span>
            <span className='view_all_length'>{Data.length} Items Total</span>
         </div>
         <div className='view_all_main'>
          {Data.map((item)=>(
            <CardComponent item = {item}/>
          ))}
         </div>
        </div>
    </>
  )
}

export default TopOffers