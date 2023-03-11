import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = (props) => {
  const {data} = props
  return (
    <>
      <div className="col-md-12 reviews_cont">
        <h5 className="review_head">Reviews for Popular Mobiles</h5>
       {data.map((item)=>(
        <ReviewCard data = {item}/>
       ))}
      </div>
    </>
  );
};

export default Reviews;
