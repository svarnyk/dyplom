import React, {useState} from "react";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import PropTypes from "prop-types";
import "./input.css";

export default function Input(props) {
  const [closeEyeStatus, setCloseEyeStatus] = useState("active");
  const [openEyeStatus, setOpenEyeStatus] = useState("hidden");
  const closeEyeClassName = `eye__closeEye eyeStatus_${closeEyeStatus}`;
  const openEyeClassName = `eye__openEye eyeStatus_${openEyeStatus}`;

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
  const [inputType, setInputType] = useState("password")

  const className = `input input_${inputType}`
  return (
    <div className={className}>
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
  variant: "text",
  placeholder: undefined,
  disabled: false,
  // buttonOnClick: undefined,
}
