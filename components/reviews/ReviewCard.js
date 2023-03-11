import React from 'react'
import { Link } from 'react-router-dom'



const ReviewCard = (props) => {

    const {data} = props
  return (
  <>
   <div className="col-md-12 review_row">
          <div className="col-5 model_detail_cont">
            <div className="col-md-5 model_image_cont">
              <img className="model_image" src={data} alt="model" />
            </div>
            <div className="col-md-7 model_description">
              <Link className="desc_link">
                <div className="desc_head">
                 Realme C30
                </div>
                <div className="rating_row">
                  <span class="badge bg-success">
                    4.5 <i className="fa fa-star" />
                  </span>
                  <span className="rating_text">
                    87854 Ratings and 6056 Reviews
                  </span>
                </div>
                <span className="rating_price">
                  14400 <span className="Off">27% Off</span>
                </span>
              </Link>
              <div className="desc_detail_row">
                4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
              </div>
              <div className="desc_detail_row">
                16.36 cm (6.44 inch) Full HD+ AMOLED Display
              </div>
              <div className="desc_detail_row">
                50MP + 2MP + 2MP | 16MP Front Camera
              </div>
            </div>
          </div>
          <div className="col-md-7 review_detail_cont">
          <div className="col-md-6 review_detail">
            <span className="comment_head">Most Helpful Review</span>
            <span className="review_rate">
              <span class="badge bg-success">
                4.5 <i className="fa fa-star" />
              </span>
              <span className="comment">Simply Awesome</span>
            </span>
            <div className="col-md-12 comment_detail">
                Phone is a so best price And a good quality camera and then
                budget friendly mobile also is best back design looking so
                awesome
              </div>
              <div className="review_foot">
                <span>Rajesh Sethi</span>
                <span><i class="fa fa-check-circle" aria-hidden="true"></i> Certified Buyer</span> 
                <span>7 month ago</span>
              </div>
              </div>
              <div className="col-md-6 review_detail">
            <span className="comment_head">Recent Review</span>
            <span className="review_rate">
              <span class="badge bg-success">
                5 <i className="fa fa-star" />
              </span>
              <span className="comment">Simply Awesome</span>
            </span>
            <div className="col-md-12 comment_detail">
            Nice performance and camera music Quality Very Good
              </div>
              <div className="review_foot">
                <span>Risham Kumar</span>
                <span><i class="fa fa-check-circle" aria-hidden="true"></i> Certified Buyer</span> 
                <span>2 days ago</span>
              </div>
              </div>
              
          </div>
        </div>
  </>
  )
}

export default ReviewCard