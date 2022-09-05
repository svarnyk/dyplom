import React, { useCallback, useState } from "react";

import "./signIn.css";
import Heading from "../../primitives/heading/heading";
import Input from "../../primitives/input/input";
import Button from "../../primitives/button/button";
import { GrClose } from "react-icons/gr";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {openModal} from "../../../store/modalSlice";
import { passUserData } from "../../../store/authUserSlice";
import {sendAuthUserData} from "../../../store/authUserSlice";

export default function SignIn(props) {
  const dispatch =useDispatch()
  const openPop = () => {dispatch(openModal("signUp"))}
  const [inputNameState, setInputNameState] = useState("");
  const [inputPasswordState, setInputPasswordState] = useState("");
  const errorClassName = `signIn__error signIn__error_${props.remindPassword}`;
  let data = {
    "username": undefined,
    "password": undefined
  };

  function getData() {
    if (inputNameState.length > 0 && inputPasswordState.length>0) {
      data = {
        // "username": "Vitalii Hrozynskyi",
        // "password": "SuperStrongPassword"
        "username": inputNameState,
        "password": inputPasswordState
      };
      // handleButtonClick();
      console.log(data)
      dispatch(sendAuthUserData(data))
      setInputNameState("")
      setInputPasswordState("")
    }
  }

  // const handleButtonClick = useCallback(() => {
  //   if (typeof props.buttonOnClick === "function") props.buttonOnClick(data);
  // }, [props.buttonOnClick, data]);
  return (
    <div className="signIn">
      <div className="signIn__wrapper">
        <div className="signIn__buttonCross" onClick={props.crossOnClick}>
          <GrClose
            size={"16px"}
          />
        </div>
        <div className="signIn__heading">
          <Heading weight={1}>Sign <span style={{ color: "#FF6363" }}>In</span></Heading>
        </div>
        <div className={errorClassName}>
          <Heading weight={5}><span style={{ color: "black", fontWeight: 700 }}>Your Password is incorrect. Please, try again</span></Heading>
        </div>
        <div className="signIn__name">
          <Input
            variant={"text"}
            heading={"Name"}
            placeholder={"Type name…"}
            nameValue={inputNameState}
            onInputNameOnChange={setInputNameState}
          />
        </div>
        <div className="signIn__password">
          <Input
            variant={"password"}
            heading={"Password"}
            placeholder={"Type password…"}
            remindPassword={props.remindPassword}
            passwordValue={inputPasswordState}
            onInputPasswordOnChange={setInputPasswordState}
          />
        </div>
        <div className="signIn__button">
          <Button
            variant={"primary"}
            label={"Sign In"}
            onClick={getData}
          />
        </div>
        <div className="signIn__signUp">
          <Heading weight={5}>Dont have an account?</Heading>
          <Button
            variant={"link"}
            label={"Sign Up"}
            onClick={openPop}
          />
        </div>
      </div>
    </div>
  );
}
SignIn.PropTypes = {
  crossOnClick: PropTypes.func,
  buttonOnClick: PropTypes.func,
  remindPassword: PropTypes.bool
};
SignIn.defaultProps = {
  remindPassword: false,
  buttonOnClick: undefined,
  crossOnClick: undefined,
};
