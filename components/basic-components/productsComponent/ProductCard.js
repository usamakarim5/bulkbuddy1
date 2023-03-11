import React from 'react'
import './productCard.css'
import laptop from '../../../images/electronics/laptop.webp'
import { Link, useNavigate } from 'react-router-dom'


const ProductCard = ({item}) => {
  const navigate = useNavigate();

  return (
    <>
        <div className='product_card' onClick={()=>{navigate('/home/product/view', {state:item}, { replace: true })}}>
        <div className='product_image_cont'>
        <img className='productcard_image' src= {item.image} alt='img'/>
        </div>
        <i class="fa fa-heart product_like_icon" aria-hidden="true"></i>  
        <div className='product_name'>{item.title} </div>
        <span className='product_small_desc'>15.6 inch, Natural Silver, 1.69 kg, With MS Office</span>
        <div className='pro_rating'>
        <span class="badge bg-success pill">4.2 <i className='fa fa-star ms-1'></i></span>
        <span className='total_rating'>3134</span>
        </div>
        <div className='pro_price'>
           {item.price}
            <span className = 'price_off'>12% Off</span>
        </div>
        <span className='offer_type'>Bank Offer</span>
        <div className='compare'>
            <input type = 'checkbox' className='checkbox_compare' value = ''></input>
            <span className='compare_text'>Add to Compare</span>
        </div>
       
        </div>
    </>
  )
}

export default ProductCard