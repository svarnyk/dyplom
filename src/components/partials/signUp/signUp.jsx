import React from "react";

import "./signUp.css";
import Heading from "../../primitives/heading/heading";
import Input from "../../primitives/input/input";
import Button from "../../primitives/button/button";
import { GrClose } from "react-icons/gr";
import PropTypes from "prop-types";

export default function SignUp(props) {
  return (
    <div className="signUp">
      <div className="signUp__wrapper">
        <div className="signUp__buttonCross" onClick={props.crossOnClick}>
          <GrClose
            size={"16px"}
          />
        </div>
        <div className="signUp__heading">
          <Heading weight={1}>Sign <span style={{ color: "#FF6363" }}>Up</span></Heading>
        </div>
        <div className="signUp__name">
          <Input
            variant={"text"}
            heading={"Name"}
            placeholder={"Type name…"}
          />
        </div>
        <div className="signUp__password">
          <Input
            variant={"password"}
            heading={"Password"}
            placeholder={"Type password…"}
          />
        </div>
        <div className="signUp__repeatPassword">
          <Input
            variant={"password"}
            heading={"Repeat Password"}
            placeholder={"Repeat password…"}
          />
        </div>
        <div className="signUp__button">
          <Button
            variant={"primary"}
            label={"Sign Up"}
            onClick={props.buttonOnClick}
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
  buttonOnClick: PropTypes.func,
  signInOnClick: PropTypes.func
};
SignUp.defaultProps = {};
