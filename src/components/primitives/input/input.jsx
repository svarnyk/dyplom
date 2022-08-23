import React, {useState} from "react";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import PropTypes from "prop-types";
import "./input.css";

export default function Input(props) {
  if (props.variant === "password") {
    const [closeEyeStatus, setCloseEyeStatus] = useState("active");
    const [openEyeStatus, setOpenEyeStatus] = useState("hidden");
    const [inputType, setInputType] = useState("password");

    function openEye() {
      setCloseEyeStatus("hidden")
      setOpenEyeStatus("active")
      setInputType("text")
    }

    function closeEye() {
      setCloseEyeStatus("active")
      setOpenEyeStatus("hidden")
      setInputType("password")
    }

    const closeEyeClassName = `eye__closeEye eyeStatus_${closeEyeStatus}`;
    const openEyeClassName = `eye__openEye eyeStatus_${openEyeStatus}`;

    return (
      <div className="input input_password">
        <input
          // value={inputState}
          // onChange={handleInputChange}
          placeholder={props.placeholder}
          type={inputType}
          disabled={props.disabled}
        />
        <div className="input__revealPassword">
          <div className="eye">
            <div className={closeEyeClassName} onClick={openEye}>
              <AiOutlineEyeInvisible size={"20px"}/>
            </div>
            <div className={openEyeClassName} onClick={closeEye}>
              <AiOutlineEye size={"20px"}/>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (props.variant === "text") {
    return (
      <div className="input input_text">
        <input
          // value={inputState}
          // onChange={handleInputChange}
          placeholder={props.placeholder}
          type={"text"}
          disabled={props.disabled}
        />
      </div>
    )
  }
}
Input.propTypes = {
  variant: PropTypes.oneOf(["text", "password"]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * Handles function on button click with input content as argument:
   * `(submit) => alert('submit recieved: ' + submit)`
   * * Required for Button render
   */
  // buttonOnClick: PropTypes.func,
}

Input.defaultProps = {
  variant: "password",
  placeholder: undefined,
  disabled: false,
  // buttonOnClick: undefined,
}
