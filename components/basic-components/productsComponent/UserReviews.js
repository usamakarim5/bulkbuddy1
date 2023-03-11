import React, { useState } from 'react'
import ReviewImagesComponent from "./ReviewImagesComponent";
import ReviewsModel from './ReviewsModel';

const UserReviews = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  
  return (
    <>
        <div className="user_comment_cont">
          <div className="user_comment_head">
            <span class="badge bg-success pill">4.2 ★</span>
            <span className="ms-3">Perfect Product</span>
          </div>
          <div className="modal_comment_main">
           <span>
           Amazing Power in this processer.. You can do everything heavy tasks.
            I am playing GTA V daily approximately 3 hours with single charge in
            Full HD Graphics With High Setting and I am proud to say it's
            playing very smoothly without lagging amazing laptop with this price
            range. 👍🏻
            
           </span> 
           <div className="rar_images_cont">
           <ReviewImagesComponent toggle = {toggle}/>
           <ReviewImagesComponent toggle = {toggle}/>
           <ReviewImagesComponent toggle = {toggle}/>
           </div>
           <ReviewsModel modal = {modal} setModal = {setModal} toggle ={toggle}/>
            <div className="modal_comment_footer">
            <div className="user_footer_row">
            <span className="user_footer_name">Flipkart Customer</span>
            <span className="ms-2">27 February</span>
            <span>
            <i className="fa fa-check-circle"></i>
            <span className="ms-2">Certified Buyer</span>
            </span>
            <span>
            <i className="fa fa-thumbs-up me-2"></i> 4567
            <span className="ms-2"> <i className="fa fa-thumbs-down me-2"></i> 4567</span>
            </span>
           
            </div>
           
            </div>
          </div>
        </div>
    </>
  )
}

export default UserReviews