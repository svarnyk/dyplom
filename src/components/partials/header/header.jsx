import React from "react";
import Logo from "../../primitives/logo/logo";
import Button from "../../primitives/button/button";
import User from "../user/user";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {openModal} from "../../../store/modalSlice";

import "./header.css"

export default function Header() {
  const userState = useSelector(state => state.user.userInform)
  const headerState = useSelector(state => state.header.isHeaderOpen)
  const dispatch = useDispatch()
  const openPop = () => {dispatch(openModal("signUp"))}
  let variant;
  const headerIsOpen = () => {
    if (headerState === false) {
      variant = "close"
      return (
        <Button
          label={"Sing Up"}
          variant={"transparent"}
          onClick={openPop}
        />
      )
    } else if (headerState === true) {
      variant = "open"
      return (
        <User
          variant={"small"}
          userName={userState.userName}
          userPicUrl={userState.userPic}
          userPicAlt={userState.userName}
        />
      )
    }
  }

  const className = `header header_${variant}`;
  return (
    <div className={className}>
      <div className="header__wrapper">
        <a className="header__logo" href={"./"}>
          <Logo color={"blue"}/>
        </a>
        <div className="header__control">
          {headerIsOpen()}
        </div>
      </div>
    </div>
  )
}

Header.PropTypes = {
  isHeaderOpen: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  isHeaderOpen: false,
}
