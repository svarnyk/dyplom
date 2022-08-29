import React, {useState} from "react";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import PropTypes from "prop-types";
import "./input.css";
import Heading from "../heading/heading";
import Button from "../button/button";

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
    const contentClassName = `input__content input__content_${props.disabled} input__content__remindPassword_${props.remindPassword}`;
    const remindClassName = `input__remindPassword input__remindPassword_${props.remindPassword}`

    return (
      <div className="input">
        <div className="input__heading input__heading_password">
          <Heading weight={3}>{props.heading}</Heading>
          <div className={remindClassName}>
            <Button
              variant={"link"}
              label={"Forgot password?"}
              onClick={props.remindButtonFunc}
            />
          </div>
        </div>
        <div className={contentClassName}>
          <input
            value={props.passwordValue}
            onChange={(event)=>{props.onInputPasswordOnChange(event.target.value)}}
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
      </div>
    )
  } else if (props.variant === "text") {
    const contentClassName = `input__content input__content_${props.disabled}`;
    return (
      <div className="input">
        <div className="input__heading">
          <Heading weight={3}>{props.heading}</Heading>
        </div>
        <div className={contentClassName}>
          <input
            value={props.nameValue}
            onChange={(event)=>{props.onInputNameOnChange(event.target.value)}}
            placeholder={props.placeholder}
            type={"text"}
            disabled={props.disabled}
          />
        </div>
      </div>
    )
  }
}
Input.propTypes = {
  variant: PropTypes.oneOf(["text", "password"]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  heading: PropTypes.string,
  remindPassword:PropTypes.bool,
  remindButtonFunc:PropTypes.func,
  passwordValue:PropTypes.string,
  onInputPasswordOnChange:PropTypes.func,
  nameValue:PropTypes.string,
  onInputNameOnChange:PropTypes.func,

}

Input.defaultProps = {
  variant: "password",
  placeholder: undefined,
  disabled: false,
  heading: undefined,
  remindPassword:false,
  remindButtonFunc:undefined,
  passwordValue:undefined,
  onInputPasswordOnChange:undefined,
  nameValue:undefined,
  onInputNameOnChange:undefined,
}
