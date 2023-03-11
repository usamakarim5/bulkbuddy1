import React from 'react'
import { Link } from 'react-router-dom'

const mobilesSmallScreen = () => {
  return (
     <div className='m_nav'>
        <i className='fa fa-arrow-right'></i>
        <div className='m_nav_title'>Mobile Phones Big Saving Day</div>
        <i className='fa fa-search'></i>
        <Link className='m_cart_icon'>
        <i className='fa fa-shopping-cart'></i>
        </Link>
        <button className="login_btn">Login</button>
     </div>
  )
}

export default mobilesSmallScreen