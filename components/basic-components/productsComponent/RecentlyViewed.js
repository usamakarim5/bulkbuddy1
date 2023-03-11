import React from 'react'
import { Link } from 'react-router-dom'
import { AppliancesData } from '../../Data/AppliancesData'
import CardComponent from './CardComponent'

const RecentlyViewed = () => {
  return (
    <div className="similar_products">
    <div className="similar_prod_head">
      <span>Recently Viewed</span>
      <Link className='btn btn-primary view_all_btn'>View All</Link>
    </div>
    <div className='recently_viewed_cont'>
        {AppliancesData.map((item,i)=>{
            if(i<4){
                return<CardComponent item = {item} />
            }
        }   
        )}
    </div>
    </div>
  )
}

export default RecentlyViewed