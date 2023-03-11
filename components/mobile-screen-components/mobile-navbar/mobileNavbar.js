import React, { useState } from "react";
import "../mobile-screen.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import bulkbuddy from "../../../images/bulkbuddy.png";

const MobileNavbar = () => {
  const [mobileLogin, setMobileLogin] = useState(false);
  const [phone, setPhone] = useState();
  const [isLoginPhone, setIsLoginPhone] = useState(true);
  const [isLeftbar, setIsLeftbar] = useState(false);

  return (
    <>
      {mobileLogin && (
        <div className="mobile_screen_login_div">
          <div className="ms_login_head">
            <i
              className="fa fa-close ms-3 pb-2 me-5"
              onClick={() => {
                setMobileLogin(false);
              }}
            ></i>
            <img className="ms_login_logo" src={bulkbuddy} alt="fkf"></img>
            <div className="ms_rounded_border"></div>
          </div>
          <div className="ms_login_main">
            <div className="ms_login_text mb-3">
              Login for the Best Experience
            </div>
            <div className="ms_login_input_div">
              <label className="ms_login_label">
                {isLoginPhone
                  ? "Enter mobile number to continue"
                  : "Enter email address to continue"}
              </label>
              {isLoginPhone ? (
                <PhoneInput
                  inputClass="ms_phone_input"
                  country={"us"}
                  value={phone}
                  onChange={(phone) => {
                    setPhone(phone);
                  }}
                />
              ) : (
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="col-12"
                />
              )}
              <div className="use_email_bottom_div">
                <span
                  className="use_mail"
                  onClick={() => {
                    setIsLoginPhone(!isLoginPhone);
                  }}
                >
                  {isLoginPhone ? "Use Email" : "Use Phone"}
                </span>
              </div>
            </div>

            <div className="ms_terms_and_conditions">
              <span>
                {" "}
                By Continuing You Are Agree to <Link>
                  Terms of Use
                </Link> and <Link>Privacy Policy</Link>
              </span>
              <button className="ms_login_submit">Continue</button>
            </div>
          </div>
        </div>
      )}

      {isLeftbar && (
        <div className="leftbar_cont">
          <div className="nav-item col-12 d-flex justify-content-end pe-3 pt-3">
            <i
              className="fa fa-close"
              onClick={() => {
                setIsLeftbar(false);
              }}
            ></i>
          </div>
          <div className="nav-item col-12 ">
            <NavLink className="leftbar_item">
              <i className="fa fa-user me-3 "></i>
              <span>Login/Signup</span>
            </NavLink>
          </div>
          <div className="nav-item col-12 ">
            <NavLink className="leftbar_item">
              <i className="fa fa-bolt me-3 "></i>
              <span>SuperCoin Zone</span>
            </NavLink>
          </div>
          <div className="nav-item  col-12 ">
            <Link className="leftbar_item">
              <i className="fa fa-store me-3 "></i>
              <span>Trending Stores</span>
            </Link>
          </div>
          <div className="nav-item col-12 ">
            <NavLink className="leftbar_item">
              <i className="fa fa-user me-3 "></i>
              <span>Login/Signup</span>
            </NavLink>
          </div>
          <div className="nav-item col-12 ">
            <NavLink className="leftbar_item">
              <i className="fa fa-bolt me-3 "></i>
              <span>SuperCoin Zone</span>
            </NavLink>
          </div>
          <div className="nav-item  col-12 ">
            <Link className="leftbar_item">
              <i className="fa fa-store me-3 "></i>
              <span>Trending Stores</span>
            </Link>
          </div>
        </div>
      )}
      <div className="ms_nav_cont">
        <div className="logo_div">
        <div className="nav_left">
          <i className="humberger_icon fa fa-bars"></i>
          <img className="b_logo_image" src={bulkbuddy} alt="fkf"></img>
          </div>
          <div className="nav_right">
            <i className="fa fa-shopping-cart me-2"></i>
          <button className="login_btn">Login</button>
          </div>
         
        </div>
        <div className="search_div_mobile">
          <form className="search_input_area">
            <i
              className="fa fa-search text search_icon_mobile "
              aria-hidden="true"
            ></i>
            <input
              className="col-11 input_mobile"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
