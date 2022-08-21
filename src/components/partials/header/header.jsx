import React from "react";
import Logo from "../../primitives/logo/logo";
import Button from "../../primitives/button/button";
import User from "../user/user";
import PropTypes from "prop-types";

import "./header.css"

export default function Header(props) {
  const headerIsOpen = () => {
    if (props.variant === "close") {
      return (
        <Button label={"Sing Up"} variant={"transparent"}/>
      )
    } else if (props.variant === "open") {
      return (
        <User
          variant={"small"}
          userName={props.userName}
          userPicUrl={props.userPicUrl}
          userPicAlt={props.userPicAlt}
        />
      )
    }
  }
  const className = `header header_${props.variant}`;
  return (
    <div className={className}>
      <div className="header__wrapper">
        <div className="header__logo">
          <Logo color={"blue"}/>
        </div>
        <div className="header__control">
          {headerIsOpen()}
        </div>
      </div>
    </div>
  )
}

Header.PropTypes = {
  variant: PropTypes.oneOf(["open", "close"]),
}

Header.defaultProps = {
  variant: "close",
}
