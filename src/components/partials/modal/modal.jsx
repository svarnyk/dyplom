import React, { useState } from "react";
import SignUp from "../signUp/signUp";
import "./modal.css";

export default function Modal() {
  const [modalStatus, setModalStatus] = useState("active");
  const crossClick = () => {
    setModalStatus("hidden");
  };
  const className = `modal modal_${modalStatus}`;
  return (
    <div className={className}>
      <div className="modal__wrapper">
        <div className="modal__signUp">
          <SignUp
            crossOnClick={crossClick}
          />
        </div>
      </div>
    </div>
  );
}

Modal.PropTypes = {};
Modal.defaultProps = {};