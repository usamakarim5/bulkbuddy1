import React, { useEffect, useState } from "react";
import {
  Spinner,
  Container,
  Form,
  Row,
  Col,

} from "reactstrap";
import "./signIn.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Collapse, CardBody, Card } from "reactstrap";

const Signup = ({ modal, toggle, handleNewUser }) => {
  const [validPhone, setValidPhone] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPan, setIsOpenPan] = useState(false);
  const [isOpenGST, setIsOpenGST] = useState(false);
  const [loading, setloading] = useState(false);
  const [step, setstep] = useState(1);
  const showCollapse = () => setIsOpen(!isOpen);
  const showCollapsePan = () => setIsOpenPan(!isOpenPan);
  const showCollapseGST = () => setIsOpenGST(!isOpenGST);

  const submitPhoneNumber = (e) => {
    e.preventDefault();
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setValidPhone(true);
      nextStep();
    }, [2000]);
  };

  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };

  const handleSubmit = () => {
    nextStep();
  };

  return (
    <>

          {step == 1 && (
            <div className="phone_number_page  co-12 signup_main_cont">
              <div className="col-5 signup_left">
                <span className="signup_main_text">
                  Looks Like You Are New Here
                </span>
                <span className="signup_sub_text">
                  Signup with your phone number to get started
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
                      label="Enter Mobile Number"
                      variant="standard"
                      fullWidth
                    />
                  </div>
                  <span className="terms_conditions">
                    By continuing you are agree to <Link> terms of use</Link>{" "}
                    and <Link>privacy policies</Link>
                  </span>
                  <div className="submit_button_div">
                    <button type="submit" className="signup_submit_btn">
                      {loading ? (
                        <Spinner color="light">Loading...</Spinner>
                      ) : (
                        <span>Submit</span>
                      )}
                    </button>
                    <Link className="existing_user_btn" onClick={handleNewUser}>
                      <span>Existing User? Login in</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          )}
          {step == 2 && (
            <Container>
              <Row>
                <Col className="d-flex justify-content-center flex-column">
                  <Row className="d-flex flex-column">
                    <Col className="mt-4 ms-4">
                      <div className="signup_backbtn" onClick={prevStep}>
                        <i className="fa fa-chevron-left me-4"></i>
                        <span>Registeration</span>
                      </div>
                    </Col>
                    <Col className="mt-4 ms-4 mb-2">
                      <h5>Sign up</h5>
                      <span className="sub_text_signup">
                        Please fill business information for the next step
                      </span>
                    </Col>
                    <span className="info_type_text ms-4 mb-2">
                      Personal Information
                    </span>
                  </Row>
                  <Form className="signup_form" onSubmit={handleSubmit}>
                    <TextField
                      InputLabelProps={{
                        style: { fontSize: 12, fontWeight: 600 },
                      }}
                      className="signup_input_div col-9 mb-4"
                      id="standard-basic"
                      label="Owner Name"
                      variant="standard"
                    />
                    <TextField
                      InputLabelProps={{
                        style: { fontSize: 12, fontWeight: 600 },
                      }}
                      className="signup_input_div col-9 mb-4"
                      id="standard-basic"
                      label="Store Name"
                      variant="standard"
                    />
                    <TextField
                      InputLabelProps={{
                        style: { fontSize: 12, fontWeight: 600 },
                      }}
                      className="signup_input_div col-9 mb-4"
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      type="email"
                    />
                    <TextField
                      InputLabelProps={{
                        style: { fontSize: 12, fontWeight: 600 },
                      }}
                      className="signup_input_div col-9 mb-4"
                      id="standard-basic"
                      label="Mobile Number"
                      variant="standard"
                      type="number"
                    />
                    <TextField
                      InputLabelProps={{
                        style: { fontSize: 12, fontWeight: 600 },
                      }}
                      className="signup_input_div col-9 mb-4"
                      id="standard-basic"
                      label="Store Address"
                      variant="standard"
                      type="text"
                    />
                    <TextField
                      InputLabelProps={{
                        style: { fontSize: 12, fontWeight: 600 },
                      }}
                      className="signup_input_div col-9 mb-4"
                      id="standard-basic"
                      label="Pin Code"
                      variant="standard"
                      type="number"
                    />
                    <TextField
                      InputLabelProps={{
                        style: { fontSize: 12, fontWeight: 600 },
                      }}
                      className="signup_input_div col-9 mb-4"
                      id="standard-basic"
                      label="State"
                      variant="standard"
                      type="text"
                    />
                    <TextField
                      InputLabelProps={{
                        style: { fontSize: 12, fontWeight: 600 },
                      }}
                      className="signup_input_div col-9 mb-4"
                      id="standard-basic"
                      label="City"
                      variant="standard"
                      type="text"
                    />
                    <Row className="">
                      <Col className="d-flex align-items-center justify-content-center m-3 mb-5">
                        <i
                          className="fa fa-arrow-right procced_nex_icon"
                          onClick={handleSubmit}
                        ></i>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          )}

          {step == 3 && (
            <Container>
              <Row>
                <Col className="d-flex justify-content-center flex-column">
                  <Row className="d-flex flex-column">
                    <Col className="mt-4 ms-4">
                      <div className="signup_backbtn" onClick={prevStep}>
                        <i className="fa fa-chevron-left me-4"></i>
                        <span>Registeration</span>
                      </div>
                    </Col>
                    <Col className="mt-4 ms-4 mb-2">
                      <h5>Sign up</h5>
                      <span className="sub_text_signup">
                        Please fill business information for the next step
                      </span>
                    </Col>
                    <span className="info_type_text ms-4 mb-2">
                      Bussiness Information
                    </span>
                  </Row>
                  <Form className="signup_form" onSubmit={handleSubmit}>
                  <div className="TextField-without-border-radius col-12">
                  <TextField
                      label="Business Type"
                      className="select_input"
                      select
                    >
                      <MenuItem value="">
                        <em>select from below</em>
                      </MenuItem>
                      <MenuItem value={20}>Retailer</MenuItem>
                      <MenuItem value={30}>Wholesellar</MenuItem>
                    </TextField>
                  </div>
                 
                    <div className="TextField-without-border-radius col-12">
                    <TextField label="Category" className="select_input" select>
                      <MenuItem value="">
                        <em>select from below</em>
                      </MenuItem>
                      <MenuItem value={10}>Tv & Appliances</MenuItem>
                      <MenuItem value={20}>Electronic Store</MenuItem>
                      <MenuItem value={30}>Mobiles</MenuItem>
                      <MenuItem value={30}>Kitchen Appliances</MenuItem>
                      <MenuItem value={30}>Computers</MenuItem>
                    </TextField>
                    </div>
                    
                    <div
                      className="form-control business_kyc"
                      onClick={nextStep}
                    >
                      <span>Business KYC</span>
                      <i className="fa fa-chevron-right"></i>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Container>
          )}
          {step == 4 && (
            <Container>
              <Row>
                <Col className="d-flex justify-content-center flex-column">
                  <Row className="d-flex flex-column">
                    <Col className="mt-4 ms-4">
                      <div className="signup_backbtn" onClick={prevStep}>
                        <i className="fa fa-chevron-left me-4"></i>
                        <span>Bussiness KYC</span>
                      </div>
                    </Col>
                  </Row>
                  <Form className="signup_form" onSubmit={handleSubmit}>
                    <div
                      className="form-control business_kyc"
                      onClick={showCollapse}
                    >
                      <span>Store Images</span>
                      {isOpen ? (
                        <i className="fa fa-chevron-down"></i>
                      ) : (
                        <i className="fa fa-chevron-right"></i>
                      )}
                    </div>
                    <Collapse className="kyc_image_cont" isOpen={isOpen}>
                      <Row className="d-flex flex-column">
                        <Col className="mb-4">
                          <div className=" kyc_images">
                           <span className="mb-2">Select image for properioter/managing parnter</span>
                           <input type='file' className="form-control"></input>
                          </div>
                        </Col>
                        <Col className="mb-4">
                          <div className=" kyc_images">
                           <span className="mb-2">Shop Entrance with Name board</span>
                           <input type='file' className="form-control"></input>
                          </div>
                        </Col>
                        <Col className="mb-4">
                          <div className=" kyc_images">
                           <span className="mb-2">Shop stup with stock</span>
                           <input type='file' className="form-control"></input>
                          </div>
                        </Col>
                      </Row>
                    </Collapse>
                    <div className="TextField-without-border-radius col-12">
                    <div
                      className="form-control business_kyc"
                      onClick={showCollapsePan}
                    >
                      <span>PAN</span>
                      {isOpenPan ? (
                        <i className="fa fa-chevron-down"></i>
                      ) : (
                        <i className="fa fa-chevron-right"></i>
                      )}
                    </div>
                    <Collapse className="kyc_image_cont" isOpen={isOpenPan}>
                      <Row className="d-flex flex-column">
                        <Col className="mb-4">
                          <div className=" kyc_images">
                           <span className="mb-2">Enter PAN Number</span>
                           <input type='text' className="form-control" placeholder="enter pan"></input>
                           <div className=" kyc_images">
                           <span className="mb-2 mt-3">Add PAN</span>
                           <input type='file' className="form-control"></input>
                          </div>
                          </div>
                        </Col>
                       
                      </Row>
                    </Collapse>
                    </div>
                    <div className="TextField-without-border-radius col-12">
                    <div
                      className="form-control business_kyc"
                      onClick={showCollapseGST}
                    >
                      <span>GST</span>
                      {isOpenGST ? (
                        <i className="fa fa-chevron-down"></i>
                      ) : (
                        <i className="fa fa-chevron-right"></i>
                      )}
                    </div>
                    <Collapse className="kyc_image_cont" isOpen={isOpenGST}>
                      <Row className="d-flex flex-column">
                        <Col className="mb-4">
                          <div className=" kyc_images">
                           <span className="mb-2">Are you registered with GST ?</span>
                           <div className="gst_radio_div">
                            <label htmlFor="gst_yes" className="me-5">Yes i have GSTIN</label>
                            <input id = 'gst_yes' type='radio'></input>
                           </div>
                           <div className="gst_radio_div">
                            <label htmlFor="gst_no" className="me-5">No, I am Exempted</label>
                            <input id = 'gst_no' type='radio' ></input>
                           </div>
                          
                          </div>
                        </Col>
                       
                      </Row>
                    </Collapse>
                    </div>
                    <Row className="my-4">
                      <Col>
                        <button className="submit_button">Proceed</button>
                      </Col>
                    </Row>
                    
                  </Form>
                </Col>
              </Row>
            </Container>
          )}

    </>
  );
};

export default Signup;
