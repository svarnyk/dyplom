import React, { useState } from "react";
import SignUp from "../signUp/signUp";
import SignIn from "../sigIn/signIn";
import "./modal.css";

export default function Modal() {
  const [modalStatus, setModalStatus] = useState("active");
  const [signUpStatus, setSignUpStatus] = useState("active");
  const [signInStatus, setSignInStatus] = useState("hidden");
  const crossClick = () => {
    setModalStatus("hidden");
  };
  const signUp = () =>{
    setSignUpStatus("active")
    setSignInStatus("hidden")
  }
  const signIn = () =>{
    setSignUpStatus("hidden")
    setSignInStatus("active")
  }
  const className = `modal modal_${modalStatus}`;
  const signUpClassName = `modal__signUp modal__signUp_${signUpStatus}`;
  const signInClassName = `modal__signIn modal__signIn_${signInStatus}`;

  return (
    <div className={className}>
      <div className="modal__wrapper">
        <div className={signUpClassName}>
          <SignUp
            crossOnClick={crossClick}
            signInOnClick={signIn}
          />
        </div>
        <div className={signInClassName}>
          <SignIn
            crossOnClick={crossClick}
            signUpOnClick={signUp}
            remindPassword={false}
          />
        </div>
      </div>
    </div>
  );
}

Modal.PropTypes = {};
Modal.defaultProps = {};
