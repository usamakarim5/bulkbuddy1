import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";

const Login = ({ modal, toggle, handleNewUser, submitPhoneNumber, loading, nextStep, prevStep, step }) => {
  return (
    <>
      <div className="phone_number_page  co-12 signup_main_cont">
        <div className="col-5 signup_left">
          <span className="signup_main_text">Login</span>
          <span className="signup_sub_text">
            Get Access to Your Orders, Wishlists and Recommendations
          </span>
        </div>
        <div className="col-7 signup_right">
          <form className="col-12" onSubmit={submitPhoneNumber}>
            <div className="signup_input_div">
              <TextField
                InputLabelProps={{
                  style: { fontSize: 12, fontWeight: 600 },
                }}
                className="signup_input_div"
                id="standard-basic"
                label="Enter Email/Phone"
                variant="standard"
                fullWidth
              />
            </div>
            <span className="terms_conditions">
              By continuing you are agree to <Link> terms of use</Link> and{" "}
              <Link>privacy policies</Link>
            </span>
            <div className="submit_button_div">
              <button type="submit" className="signup_submit_btn">
                {loading ? (
                  <Spinner color="light">Loading...</Spinner>
                ) : (
                  <span>Submit</span>
                )}
              </button>
              <Link className="existing_user_btn" onClick= {handleNewUser}>
                <span>Not Registered ? Sign Up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
