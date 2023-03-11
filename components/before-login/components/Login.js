import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from "reactstrap";
import login from "../../../images/login.png";
import v_code from "../../../images/v_code.png";
import mobile_login from "../../../images/mobile_login.avif";
import { Spinner, Container, Form, Row, Col } from "reactstrap";
import { Collapse } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ toggle, modal }) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState();
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPan, setIsOpenPan] = useState(false);
  const [isOpenGST, setIsOpenGST] = useState(false);
  const showCollapse = () => setIsOpen(!isOpen);
  const showCollapsePan = () => setIsOpenPan(!isOpenPan);
  const showCollapseGST = () => setIsOpenGST(!isOpenGST);
  const [gstValue, setGstValue] = useState();
  const [isLogin, setIsLogin] = useState(true)

  const handleStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = ()=>{
     navigate('/home')
  }

 const handleNewUser = ()=>{
   setIsLogin(!isLogin)
 }

 useEffect(()=>{
  setIsLogin(true)
 },[modal])



  return (
    <>
      <Modal isOpen={modal} toggle={toggle} className="login_modal_main">
        <div className="signup_backbtn" onClick={step <= 1 ? toggle : prevStep}>
          <i className="fa fa-arrow-left m-4 mb-2"></i>
        </div>
      
      {
        isLogin  ? 
        <div>
            <div className="lm_cont">
              <div className="lm_image_div">
                <img src={login} alt="img" className="lm_image"></img>
              </div>
            </div>
            <div className="lm_main_input_div">
              <div className="lm_phone_head">
                <span>Login to Account</span>
                <sub className="lm_subtitle">
                 Enter email/password to login
                </sub>
              </div>
              <form className="lm_input_div" onSubmit={handleSubmit}>
                <label className="lm_input_label">Email Address</label>
                <input
                  className="form-control lm_input"
                  placeholder="Enter Email"
                  type = 'email'
                ></input>
                 <label className="lm_input_label">Passowrd</label>
                <input
                  className="form-control lm_input"
                  placeholder="Enter Password"
                  type = 'password'
                ></input>
                <div className="lm_user_type_change" onClick={handleNewUser}>Don't have an account? Sign Up</div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button type="submit" className="lm_mobile_submit_btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          :

      <div>

      {step == 1 && (
          <div>
            <div className="lm_cont">
              <div className="lm_image_div">
                <img src={mobile_login} alt="img" className="lm_image"></img>
              </div>
            </div>
            <div className="lm_main_input_div">
              <div className="lm_phone_head">
                <span>Enter Your Mobile Number</span>
                <sub className="lm_subtitle">
                  Enter mobile number to receive verification code
                </sub>
              </div>
              <form className="lm_input_div" onSubmit={handleStep}>
                <label className="lm_input_label">Mobile Number</label>
                <PhoneInput
                  inputClass="lm_input"
                  country={"in"}
                  value={phone}
                  onChange={(phone) => {
                    setPhone(phone);
                  }}
                />
               <div className="lm_user_type_change" onClick={handleNewUser}>Already have an account? Login</div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button type="submit" className="lm_mobile_submit_btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {step == 2 && (
          <div>
            <div className="lm_cont">
              <div className="lm_image_div">
                <img src={v_code} alt="img" className="lm_image"></img>
              </div>
            </div>
            <div className="lm_main_input_div">
              <div className="lm_phone_head">
                <span>Enter Varification Code</span>
                <sub className="lm_subtitle">
                  Enter varification code sent to your mobile
                </sub>
              </div>
              <form className="lm_input_div" onSubmit={handleStep}>
                <label className="lm_input_label">Varification Code</label>
                <input
                  className="form-control lm_input"
                  placeholder="Enter code"
                ></input>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button type="submit" className="lm_mobile_submit_btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
       
          <Form className="signup_form" onSubmit={handleSubmit}>
          {step == 3 && (
          <Container>
            <Row>
              <Col className="d-flex justify-content-center align-items-center flex-column">
                <div className="lm_signup_head">
                  <div className="lm_reg_title">
                    <span>Registeration</span>
                  </div>
                  <span className="lm_info_type_text">
                    Personal Information
                  </span>
                </div>
          
                  <Label className="lm_signup_label">Name</Label>
                  <Input className="lm_signup_fields form-control" />
                  <Label className="lm_signup_label">Shop Name</Label>
                  <Input className="lm_signup_fields form-control" />
                  <Label className="lm_signup_label">Email</Label>
                  <Input className="lm_signup_fields form-control" />

                  <Label className="lm_signup_label">Phone Number</Label>
                  <Input className="lm_signup_fields form-control" />

                  <Label className="lm_signup_label">Pin Code</Label>
                  <Input className="lm_signup_fields form-control" />
                  <Label className="lm_signup_label">City</Label>
                  <Input className="lm_signup_fields form-control" />
                  <Row className="">
                    <Col className="d-flex align-items-center justify-content-center m-3 mb-5">
                      <button
                        type="submit"
                        className="lm_mobile_submit_btn"
                        onClick={handleStep}
                      >
                        Next
                      </button>
                    </Col>
                  </Row>
              
              </Col>
            </Row>
          </Container>
          )}

          {step == 4 && (
          <Container>
            <Row>
              <Col className="d-flex justify-content-center align-items-center flex-column">
                <div className="lm_signup_head">
                  <div className="lm_reg_title">
                    <span>Registeration</span>
                  </div>
                  <span className="lm_info_type_text">
                    Bussiness Information
                  </span>
                </div>
           
                  <Label className="lm_signup_label">Bussiness Type</Label>
                  <Input
                    name="select"
                    type="select"
                    className="lm_signup_fields"
                  >
                    <option disabled>choose</option>
                    <option>Retailer</option>
                    <option>Wholesellar</option>
                  </Input>
                  <Label className="lm_signup_label">Category</Label>
                  <Input
                    name="select"
                    type="select"
                    className="lm_signup_fields"
                  >
                    <option disabled>choose</option>
                    <option>Tv & Appliances</option>
                    <option>Electronic Store</option>
                    <option>Mobiles</option>
                    <option>Kitchen Appliances</option>
                    <option>Computers</option>
                  </Input>
                  <Label className="lm_signup_label">Bussiness KYC</Label>
                  <div
                    className="form-control lm_signup_kyc"
                    onClick={handleStep}
                  >
                    <span>Business KYC</span>
                    <i className="fa fa-chevron-right"></i>
                  </div>
              
              </Col>
            </Row>
          </Container>
        )}

        {step == 5 && (
          <Container>
            <Row>
              <Col className="d-flex justify-content-center align-items-center flex-column">
                <div className="lm_signup_head">
                  <div className="lm_reg_title">
                    <span>Registeration</span>
                  </div>
                  <span className="lm_info_type_text">KYC Information</span>
                </div>
        
                  <Label className="lm_signup_label">Store Images</Label>
                  <div
                    className="form-control lm_signup_kyc"
                    onClick={showCollapse}
                  >
                    <span>Store Images</span>
                    {isOpen ? (
                      <i className="fa fa-chevron-down"></i>
                    ) : (
                      <i className="fa fa-chevron-right"></i>
                    )}
                  </div>
                  <Collapse className="lm_kyc_image_div" isOpen={isOpen}>
                    <span className="lm_kyc_label_text">
                      Select image for properiter/managing parnter
                    </span>
                    <input
                      type="file"
                      className="form-control lm_signup_fields"
                    ></input>
                    <span className="lm_kyc_label_text">
                      Shop entrance wit name board
                    </span>
                    <input
                      type="file"
                      className="form-control lm_signup_fields"
                    ></input>
                    <span className="lm_kyc_label_text">
                      Shop setup with stock
                    </span>
                    <input
                      type="file"
                      className="form-control lm_signup_fields"
                    ></input>
                  </Collapse>
                  <Label className="lm_signup_label">PAN</Label>
                  <div
                    className="form-control lm_signup_kyc"
                    onClick={showCollapsePan}
                  >
                    <span>PAN</span>
                    {isOpenPan ? (
                      <i className="fa fa-chevron-down"></i>
                    ) : (
                      <i className="fa fa-chevron-right"></i>
                    )}
                  </div>
                  <Collapse className="lm_kyc_image_div" isOpen={isOpenPan}>
                    <Label className="lm_kyc_label_text">
                      Enter PAN Number
                    </Label>
                    <Input
                      className="lm_signup_fields form-control"
                      placeholder="Enter PAN number"
                    />
                    <Label className="lm_kyc_label_text">CNIC Number</Label>
                    <Input
                      className="lm_signup_fields form-control"
                      placeholder="Enter cnic number"
                    />
                    <Label className="lm_kyc_label_text">Add PAN</Label>
                    <input
                      type="file"
                      className="form-control lm_signup_fields"
                    ></input>
                  </Collapse>

                  <Label className="lm_signup_label">GST</Label>
                  <div
                    className="form-control lm_signup_kyc"
                    onClick={showCollapseGST}
                  >
                    <span>GST</span>
                    {isOpenGST ? (
                      <i className="fa fa-chevron-down"></i>
                    ) : (
                      <i className="fa fa-chevron-right"></i>
                    )}
                  </div>
                  <Collapse
                    className="lm_kyc_image_div pt-4"
                    isOpen={isOpenGST}
                  >
                    <Row className="d-flex flex-column">
                      <Col className="mb-4">
                        <div className="lm_kyc_radios">
                          <span className="mb-2">
                            Are you registered with GST ?
                          </span>
                          <div className="gst_radio_div">
                            <label htmlFor="gst_yes" className="me-5">
                              Yes i have GSTIN
                            </label>
                            <Input
                              id="gst_yes"
                              name="gst"
                              value={1}
                              type="radio"
                              onClick={(e) => {
                                setGstValue(e.target.value);
                              }}
                            ></Input>
                          </div>
                          {gstValue == 1 && (
                            <div>
                              <Label className="lm_kyc_label_text">
                                Enter GSTIN Number
                              </Label>
                              <Input
                                className="lm_signup_fields form-control"
                                placeholder="Enter Gst number"
                              />
                            </div>
                          )}
                          <div className="gst_radio_div">
                            <label htmlFor="gst_no" className="me-5">
                              No, I am Exempted
                            </label>
                            <Input
                              id="gst_no"
                              name="gst"
                              value={0}
                              type="radio"
                              onClick={(e) => {
                                setGstValue(e.target.value);
                              }}
                            ></Input>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Collapse>

                  <Row className="my-4">
                    <Col>
                      <button type="submit" className="lm_mobile_submit_btn">
                        Proceed
                      </button>
                    </Col>
                  </Row>
              </Col>
            </Row>
          </Container>
        )}
          </Form>
     
      </div>
          
      }
       
       
        
      </Modal>
    </>
  );
};

export default Login;
