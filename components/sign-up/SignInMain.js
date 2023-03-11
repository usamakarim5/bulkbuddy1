import React, { useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import Login from './Login'
import Signup from './Signup'

const SignInMain = ({modal, toggle}) => {
    const [isNew, setIsNew] = useState(false)

    const handleNewUser = ()=>{
        setIsNew(!isNew)
    }

  return (
    <>
        <Modal isOpen={modal} toggle={toggle} size="lg" className="modal_content">
        <ModalBody className="signup_modal_body">
          <i className="fa fa-close signup_close_icon" onClick={toggle}></i>
    {isNew ?
    <Signup handleNewUser = {handleNewUser}/>:
    <Login handleNewUser = {handleNewUser}/>
    }
    </ModalBody>
    </Modal>
    </>
  )
}

export default SignInMain