import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import visa from '../../../images/payment/visa.svg'

const Footer = () => {

  var year = new Date().getFullYear()
  return (
    <>
      <div className="col-md-12 footer_main">
        <div className=" footer_left">
          <div className="col-md-3 foot_left_col">
            <span className="about">About</span>
            <Link className="footer_links">Contact Us</Link>
            <Link className="footer_links">About Us</Link>
            <Link className="footer_links">Careers</Link>
            <Link className="footer_links">Press</Link>
            <Link className="footer_links">Corporate Information</Link>
          </div>
          <div className="col-md-3 foot_left_col">
            <span className="about">Help</span>
            <Link className="footer_links">Payments</Link>
            <Link className="footer_links">Shipping</Link>
            <Link className="footer_links">Cancellation & Returns</Link>
            <Link className="footer_links">FAQ</Link>
            <Link className="footer_links">Report Infringements</Link>
          </div>
          <div className="col-md-3 foot_left_col">
            <span className="about">Policy</span>
            <Link className="footer_links">Return Policy</Link>
            <Link className="footer_links">Terms of Use</Link>
            <Link className="footer_links">Security</Link>
            <Link className="footer_links">Privacy</Link>
            <Link className="footer_links">Sitemap</Link>
            <Link className="footer_links">EPR Compliance</Link>
          </div>
          <div className="col-md-3 foot_left_col">
            <span className="about">Social</span>
            <Link className="footer_links">Facebook</Link>
            <Link className="footer_links">Twitter</Link>
            <Link className="footer_links">Youtube</Link>
          </div>
        </div>
        <div className="footer_right">
          <div className="col-6 foot_right_col border_left">
            <span className="mail_us">Mail Us:</span>
            <span className="right_foot_text">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </span>
          </div>
          <div className="col-6 foot_right_col">
            <span className="mail_us">Registered Office Address</span>
            <span className="right_foot_address">
              Flipkart Internet Private Limited,BuildingsAlyssa, Begonia & Clove
              Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
              Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
              Telephone: 044-45614700
            </span>
          </div>
        </div>
      
      </div>
      <div className="col-md-12 copyright">
          <Link className="col-md-2 copyright_items">
          <i class="fa fa-check-circle copyright_icon" aria-hidden="true"></i>
            <span className="copyright_text">Advertise</span>
          </Link>
          <Link className="col-md-2 copyright_items">
          <i class="fa fa-gift copyright_icon" aria-hidden="true"></i>
            <span className="copyright_text">Gift Cards</span>
          </Link>
          <Link className="col-md-2 copyright_items">
          <i class="fa fa-question-circle copyright_icon" aria-hidden="true"></i>
            <span className="copyright_text">Help Center</span>
          </Link>
          <div className="col-md-2 copyright_items">
            <span className="copyright_text">© 2007 - {year} domain.com</span>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <img className="copyright_bottom_image" src = {visa} alt= 'skd'/>
          </div>
          </div>
    </>
  );
};

export default Footer;
