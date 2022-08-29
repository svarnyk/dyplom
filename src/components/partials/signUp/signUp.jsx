import React, {useState} from "react";

import "./signUp.css";
import Heading from "../../primitives/heading/heading";
import Input from "../../primitives/input/input";
import Button from "../../primitives/button/button";
import {GrClose} from "react-icons/gr";
import PropTypes from "prop-types";

export default function SignUp(props) {
  const [inputNameState, setInputNameState] = useState('')
  const [inputPasswordState, setInputPasswordState] = useState('')
  const [inputRepeatPasswordState, setInputRepeatPasswordState] = useState('')
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)
  const errorClassName = `signUp__error_${isPasswordCorrect}`;
  let data = {
    "username": undefined,
    "password": undefined
  }

  function getData() {
    if (inputPasswordState === inputRepeatPasswordState) {
      setIsPasswordCorrect(false)
      data = {
        "username": inputNameState,
        "password": inputPasswordState
      }
      console.log(data)
      props.registrationData = data
    } else {
      setIsPasswordCorrect(true)
    }
  }

  return (
    <div className="signUp">
      <div className="signUp__wrapper">
        <div className="signUp__buttonCross" onClick={props.crossOnClick}>
          <GrClose
            size={"16px"}
          />
        </div>
        <div className="signUp__heading">
          <Heading weight={1}>Sign <span style={{color: "#FF6363"}}>Up</span></Heading>
        </div>
        <div className={errorClassName}>
          <Heading weight={5}><span
            style={{color: "black", fontWeight: 700}}>Passwords don't match, please try again.</span></Heading>
        </div>
        <div className="signUp__name">
          <Input
            variant={"text"}
            heading={"Name"}
            placeholder={"Type name…"}
            nameValue={inputNameState}
            onInputNameOnChange={setInputNameState}
          />
        </div>
        <div className="signUp__password">
          <Input
            variant={"password"}
            heading={"Password"}
            placeholder={"Type password…"}
            remindPassword={false}
            passwordValue={inputPasswordState}
            onInputPasswordOnChange={setInputPasswordState}
          />
        </div>
        <div className="signUp__repeatPassword">
          <Input
            variant={"password"}
            heading={"Repeat Password"}
            placeholder={"Repeat password…"}
            remindPassword={false}
            passwordValue={inputRepeatPasswordState}
            onInputPasswordOnChange={setInputRepeatPasswordState}
          />
        </div>
        <div className="signUp__button">
          <Button
            variant={"primary"}
            label={"Sign Up"}
            onClick={getData}
          />
        </div>
        <div className="signUp__signIn">
          <Heading weight={5}>Already have an account?</Heading>
          <Button
            variant={"link"}
            label={"Sign In"}
            onClick={props.signInOnClick}
          />
        </div>
      </div>
    </div>
  );
}
SignUp.PropTypes = {
  crossOnClick: PropTypes.func,
  signInOnClick: PropTypes.func
};
SignUp.defaultProps = {
  crossOnClick: undefined,
  signInOnClick: undefined
};
