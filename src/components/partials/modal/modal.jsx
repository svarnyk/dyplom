import React, {useState} from "react";
import SignUp from "../signUp/signUp";
import SignIn from "../sigIn/signIn";
import "./modal.css";
import AddNewVideo from "../addNewVideo/addNewVideo";
import PropTypes from "prop-types";

export default function Modal(props) {
  const [modalStatus, setModalStatus] = useState("active");
  const [signUpStatus, setSignUpStatus] = useState("active");
  const [signInStatus, setSignInStatus] = useState("hidden");
  const [addNewVideoStatus, setAddNewVideoStatus] = useState("hidden");
  const crossClick = () => {
    setModalStatus("hidden");
  };
  const signUp = () => {
    setSignUpStatus("active")
    setSignInStatus("hidden")
    setAddNewVideoStatus("hidden")
  };
  const signIn = () => {
    setSignInStatus("active")
    setSignUpStatus("hidden")
    setAddNewVideoStatus("hidden")
  };
  const addNewVideo = () => {
    setAddNewVideoStatus("active")
    setSignInStatus("hidden")
    setSignUpStatus("hidden")
  };
  const className = `modal modal_${modalStatus}`;
  const signUpClassName = `modal__signUp modal__signUp_${signUpStatus}`;
  const signInClassName = `modal__signIn modal__signIn_${signInStatus}`;
  const addNewVideoClassName = `modal__addNewVideo modal__addNewVideo_${addNewVideoStatus}`;

  return (
    <div className={className}>
      <div className="modal__wrapper">
        <div className={signUpClassName}>
          <SignUp
            crossOnClick={crossClick}
            signInOnClick={signIn}
            buttonOnClick={props.signUpOnClick}
          />
        </div>
        <div className={signInClassName}>
          <SignIn
            crossOnClick={crossClick}
            signUpOnClick={signUp}
            remindPassword={props.signInRemindPas}
            buttonOnClick={props.signInOnClick}
          />
          <div className={addNewVideoClassName}>
            <AddNewVideo
              cancelOnClick={crossClick}
              buttonOnClick={props.addVideoOnClick}
              toVideoOnClick={props.toVideoOnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.PropTypes = {
  addVideoOnClick: PropTypes.func,
  toVideoOnClick: PropTypes.func,
  signInOnClick: PropTypes.func,
  signUpOnClick: PropTypes.func,
  signInRemindPas: PropTypes.bool,
};
Modal.defaultProps = {
  signInRemindPas: false,
  addVideoOnClick: undefined,
  toVideoOnClick: undefined,
  signInOnClick: undefined,
  signUpOnClick: undefined,
};
