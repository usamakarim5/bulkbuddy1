import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import bulkbuddy from "../../../images/bulkbuddy.png";
import SignInMain from "../../sign-up/SignInMain";


const Navbar = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  


  return (
    <>
    

    
      <div className=" container-fluid navbar_div ">
        <div className="logo_cont">
          <Link className="navbar-brand" to="#">
            <img className="flipartLogo" src={bulkbuddy} alt="fkf"></img>
          </Link>
        </div>    
        <div className="nav_items">
          <form class="search_div">
            <input
              className="col-10 input"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
            <i
              className="fa fa-search text search_icon "
              aria-hidden="true"
            ></i>
          </form>
          <div className="nav_right">
            <div className="nav-item login_drop_cont">
              <button className="butn">Login</button>

              <div className="login_dropdown">
                <div className="login_drop_head">
                  <span>New Customer ?</span>
                  <span
                    className="login_drop_signBtn"
                    onClick={() => {
                      toggle();
                    }}
                  >
                    Signup
                  </span>
                </div>
                <Link className="login_drop_link">
                  <i className="fa fa-user-circle login_drop_signBtn me-4"></i>
                  <span className="link_text_login">User Profile</span>
                </Link>
                <Link className="login_drop_link">
                  <i className="fa fa-user-circle login_drop_signBtn me-4"></i>
                  <span className="link_text_login">User Profile</span>
                </Link>
                <Link className="login_drop_link">
                  <i className="fa fa-user-circle login_drop_signBtn me-4"></i>
                  <span className="link_text_login">User Profile</span>
                </Link>
                <Link className="login_drop_link">
                  <i className="fa fa-user-circle login_drop_signBtn me-4"></i>
                  <span className="link_text_login">User Profile</span>
                </Link>
                <Link className="login_drop_link">
                  <i className="fa fa-user-circle login_drop_signBtn me-4"></i>
                  <span className="link_text_login">User Profile</span>
                </Link>
              </div>
            </div>
         

            <div className="nav-item ms-4 download_app">
              <Link className="nav-link text_Sellar">
                {" "}
                <span className="text_Sellar">Download App</span>
              </Link>
            </div>
            <div className="nav-item ms-4">
              <Link>
                <i
                  className="fa fa-shopping-cart cart_icon text"
                  aria-hidden="true"
                ></i>{" "}
                <span className="ms-1 text_Sellar cart_text">Cart</span>
              </Link>
            </div>
          </div>

          <SignInMain modal={modal} toggle={toggle} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
