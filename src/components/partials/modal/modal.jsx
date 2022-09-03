/* eslint-disable */
import React from "react";
import SignUp from "../signUp/signUp";
import SignIn from "../sigIn/signIn";
import "./modal.css";
import AddNewVideo from "../addNewVideo/addNewVideo";
import PropTypes from "prop-types";

export default function Modal(props) {
  const className = `modal modal_${props.modalStatus} modal_${props.modalVariant}`;

  return (
    <div className={className}>
      <div className="modal__wrapper">
        <div className="modal__signUp">
          <SignUp
            crossOnClick={props.onCancel}
            buttonOnClick={props.signUpOnClick}
          />
        </div>
        <div className="modal__signIn">
          <SignIn
            crossOnClick={props.onCancel}
            remindPassword={props.signInRemindPas}
            buttonOnClick={props.signInOnClick}
          />
        </div>
        <div className="modal__addNewVideo">
          <AddNewVideo
            cancelOnClick={props.onCancel}
            buttonOnClick={props.addVideoOnClick}
            toVideoOnClick={props.toVideoOnClick}
          />
        </div>
      </div>
    </div>
  )
}

Modal.PropTypes = {
  modalVariant: PropTypes.oneOf(["signUp", "signIn", "addNewVideo"]),
  modalStatus: PropTypes.oneOf(["active", "hidden"]),
  onCancel: PropTypes.func,

  addVideoOnClick: PropTypes.func,
  toVideoOnClick: PropTypes.func,
  signInOnClick: PropTypes.func,
  signUpOnClick: PropTypes.func,
  signInRemindPas: PropTypes.bool,
};
Modal.defaultProps = {
  // modalVariant: "signUp",
  // modalStatus: "hidden",
  // onCancel: undefined,

  signInRemindPas: false,
  addVideoOnClick: undefined,
  toVideoOnClick: undefined,
  signInOnClick: undefined,
  signUpOnClick: undefined,
};
