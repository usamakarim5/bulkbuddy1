import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CardComponent = (props) => {
  const{item} = props;
  const navigate = useNavigate();
  return (
    <div className='card_component' onClick={()=>{navigate('/home/product/view', {state:item}, {replace: true})}}>
    <div className='product_image_cont'>
    <img className='productcard_image' src= {item.image} alt='img'/>
    </div>
    <i class="fa fa-heart product_like_icon" aria-hidden="true"></i>  
    <div className='card_body'>
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
    </div>
   
   
    </div>
  )
}

export default CardComponent