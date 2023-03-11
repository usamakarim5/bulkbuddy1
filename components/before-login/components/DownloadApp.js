import React, { useState } from 'react'
import Login from './Login';
import BeforeLoginNavbar from './navbar'
import d_google from '../../../images/d_google.webp';
import d_apple from '../../../images/d_apple.webp';
import { Link } from 'react-router-dom';
import Footer from '../../basic-components/footer/Footer';

const DownloadApp = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
  return (
   <>
    <Login toggle = {toggle} modal = {modal}/>
   <BeforeLoginNavbar  toggle = {toggle} modal = {modal} />
   <div className='download_cont'>
     <h2 className='download_head'>
     Get started with Bulkbuddy App now
     </h2>
     <span className='download_sub'>Use the below link to install the Bulkbuddy app on your phone.</span>
     <Link>
        <img src = {d_google} alt = 'pic' className='d-links mb-5'></img>
    </Link>
    <Link>
    <img src = {d_apple} alt = 'pic' className='d-links'></img>
    </Link>
       
     
   </div>
   <Footer/>
   </>
  )
}

export default DownloadApp