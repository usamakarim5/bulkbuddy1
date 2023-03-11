import React from 'react'
import rar_bg_image from "../../../images/rar_bg_image.webp";


const ReviewImagesComponent = (props) => {
  return (
   <>
    <div
                style={{
                  backgroundImage: `url(${rar_bg_image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100px",
                  height: "100px",
                  backgroundSize:'cover',
                  cursor: 'pointer',
                  marginLeft:'.2rem',
                  marginBottom:'.5trm'
                }}
                onClick={props.toggle}
              ></div>
   </>
  )
}

export default ReviewImagesComponent