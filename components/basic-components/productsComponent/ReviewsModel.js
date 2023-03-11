import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import rar_bg_image from "../../../images/rar_bg_image.webp";

const items = [
  {
    src: `${rar_bg_image}`,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: `${rar_bg_image}`,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: `${rar_bg_image}`,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

const ReviewsModel = (props) => {
  const { toggle, modal, setModal } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, i) => {
    return (
      <CarouselItem key={i} className="carousel_item">
        <img
          className="modal_carousel_image"
          src={item.src}
          alt={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Modal isOpen={modal} toggle={toggle} size="lg" centered="true">
      <ModalHeader toggle={toggle}></ModalHeader>
      <ModalBody className="d-flex">
        <div className="modal_carousel">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
        <div className="modal_comment_cont">
          <div className="modal_comment_head">
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
            <div className="modal_comment_footer">
            <div className="modal_footer_row">
            <span className="modal_footer_name">Flipkart Customer</span>
            <span className="ms-2">27 February</span>
            </div>
            <div className="modal_footer_row">
            <i className="fa fa-check-circle"></i>
            <span className="ms-2">Certified Buyer</span>
            </div>
            <div className="modal_footer_row">
            <i className="fa fa-thumbs-up me-2"></i> 4567
            <span className="ms-2"> <i className="fa fa-thumbs-down me-2"></i> 4567</span>
            </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ReviewsModel;
