import React, { useState } from "react";
import { Link } from "react-router-dom";
import bulkbuddy from '../../../images/bulkbuddy.png'
import '../before-login.css'


const BeforeLoginNavbar= ({toggle}) => {

  return (
    <>
   <div className="blogin_navbar">
    <div className="bn_logo_div">
        <img className="bl_logo_image" src = {bulkbuddy} alt ='img'/>
        <span className="bl_logo_title">Bulkbuddy</span>
    </div>
    <div className="bl_search_cont">
        <form className="bl_seach_form">
           <div className="search_inner_div form-control">
           <div className="bl_search_icon_cont"><i className="fa fa-search"></i></div>
            <input className="bl_search_input" placeholder="Search"></input>
           </div>
          
        </form>
    </div>
    <div className="bl_about_div">
        <Link className="bl_about_btn" to = {'/about-us'}>ABOUT</Link>
        <Link className="bl_about_btn"  to = {'/download-app'}>DOWNLOAD APP</Link>
        <button className=" bl_login_btn" onClick={toggle}>LOGIN</button>
    </div>
   </div>


    
    </>
  );
};

export default BeforeLoginNavbar;
