import React, { useRef, useState } from "react";
import "../before-login.css";
import bulkbuddy from "../../../images/bulkbuddy.png";
import Footer from "../../basic-components/footer/Footer";
import { Link } from "react-router-dom";
import about_us from "../../../images/about.png";
import user from "../../../images/user.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const About = () => {
  const founderRef = useRef();
  const aboutRef = useRef();
  const legalRef = useRef();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const showFounder = () => {
    founderRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const showAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const showLegal = () => {
    legalRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div className="about_topbar_cont">
        <div className="about_topbar">
          <div className="about_topbar_image_div">
            <img className="about_logo_img" src={bulkbuddy} alt="img" />
          </div>
          <div className="aboout_tb_right">
            <span className="about_btn" onClick={showAbout}>
              About
            </span>
            <span className="about_btn" onClick={showFounder}>
              Founders
            </span>
            <span className="about_btn" onClick={showLegal}>
              Legal and Compiliance Detail
            </span>
            <Link className="about_btn_buy_cell" to={"/"}>
              Buy/Sell at Bulkbuddy
            </Link>
          </div>
        </div>
      </div>
      <div className="about_cont">
        <div className="about_main_div">
          <div className="about_section" ref={aboutRef}>
            <div className="about_text_cont">
              <h5 className="founder_head">About Bulkbuddy</h5>
              Founded in 2016 with a vision to "transform the way trade is done
              in India leveraging technology", udaan is India’s largest
              business-to-business e-commerce platform. It has operations across
              categories including lifestyle, electronics, home & kitchen,
              staples, fruits and vegetables, FMCG, pharma, toys and general
              merchandise. udaan is solving core trade problems faced by small
              and medium businesses, that are unique to India, through its
              unique India-fit low-cost business model by leveraging technology
              and bringing the benefits of eCommerce to them. It is a one stop
              shop for all business requirements in the b2b space. udaan has
              built inclusive tech tools for Bharat, specially catering to the
              needs of brands, retailers and manufacturers, providing them a
              level playing field to scale, trade and grow businesses. The
              platform acts as a catalyst to enable transparency, accessibility,
              affordability and national reach to 15 million manufacturers,
              25–30 million retailers, 10–12 million institutional businesses
              like office, school, HoReCa etc. that account for over 60 million
              MSMEs in India. udaan’s aim is to be a trusted partner to small
              businesses by empowering them with technology, financial
              inclusivity, and supply chain capabilities to compete and win in
              an increasingly tech and digital world. udaan has a network of
              over 3 million registered users and 25,000-30,000 sellers across
              900+ cities in the country covering more than 12,000 pin codes.
              
            </div>
            <div className="about_image_div">
              <img src={about_us} alt="pic" className="about_us_image"></img>
            </div>
            
          </div>
          <div className="founder_section" ref={founderRef}>
            <h5 className="founder_head">Founders Profile</h5>
            <div className="founder_main">
              <div className="about_founder_text">
              <img src = {user} alt = 'pic' className="founder_user_image"></img>
                <span className="founder_title">Ahmed Shah</span>
                While the app-based pricing system gives better pricing control,
                the product listing advertisements and in-app advertisements
                encourages manufacturers and wholesalers to reach their
                targeted, specific, and ready-to-purchase retailers on the
                platform. udaan is headquartered in Bengaluru with offices in
                all leading metros and major cities across India.
              </div>

              <div className="about_founder_text">
              <img src = {user} alt = 'pic' className="founder_user_image"></img>
                <span className="founder_title">Amod Malviya</span>
                The platform has over 1.7 million retailers, chemists, kirana
                shops, HoReCa, farmers, etc. doing over 4.5 million transactions
                per month, making udaan a leader in the b2b eCommerce business.
                udaan enables small manufacturers, farmers, and brands to market
                and sell their products across the country at low cost with 100%
                payment security and complete transparency. While doing so it

                <div className="d-flex mt-2 align_items-center justify-content-center">
              <button className="read_more_btn" onClick={toggle}>Read More</button>
              </div>
              </div>
              <div className="about_founder_text">
              <img src = {user} alt = 'pic' className="founder_user_image"></img>
                <span className="founder_title">Amod Malviya</span>
                The platform has over 1.7 million retailers, chemists, kirana
                shops, HoReCa, farmers, etc. doing over 4.5 million transactions
                per month, making udaan a leader in the b2b eCommerce business.
                udaan enables small manufacturers, farmers, and brands to market
                and sell their products across the country at low cost with 100%
                payment security and complete transparency. While doing so it
   
                <div className="d-flex mt-2 align_items-center justify-content-center">
              <button className="read_more_btn" onClick={toggle}>Read More</button>
              </div>
              </div>
            </div>
          </div>
          <div className="legal_section" ref={legalRef}>
            <h5 className="founder_head">Legal and Compliance Details</h5>
            <span className="legal_text">
              HTPL FSSAI License Number - 5468098504384929
            </span>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} size='lg' className="about_more_modal">
        <ModalHeader toggle={toggle}> About Bulkbuddy</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. The platform
          has over 1.7 million retailers, chemists, kirana shops, HoReCa,
          farmers, etc. doing over 4.5 million transactions per month, making
          udaan a leader in the b2b eCommerce business. udaan enables small
          manufacturers, farmers, and brands to market and sell their products
          across the country at low cost with 100% payment security and complete
          transparency. While doing so it enables small businesses such as
          shopkeepers, kirana, restaurants, street vendors, chemists, offices,
          small factories, contractors etc. to source from a large selection of
          high-quality products at best prices while facilitating efficient and
          transparent transactions with huge convenience. Through a seamless
          process, it enables the buyer (retailer) to select a product, place an
          order with sellers (wholesalers, brands and manufacturers) who pack it
          and dispatch it through udaanExpress. The buyer pays on delivery
          unless it is a credit transaction. It provides access to new markets
          and regions with greater cost-efficiency and better price control.
        </ModalBody>
      </Modal>
      <Footer />
    </>
  );
};

export default About;
