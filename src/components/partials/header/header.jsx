import React from "react";
import Logo from "../../primitives/logo/logo";
import Button from "../../primitives/button/button";
import User from "../user/user";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {openModal} from "../../../store/modalSlice";

import "./header.css"
import { useNavigate } from "react-router-dom";
import { passUserInfo } from "../../../store/userSlice";

export default function Header() {
  const userState = useSelector(state => state.authUser.userInform)
  const headerState = useSelector(state => state.header.isHeaderOpen)
  const dispatch = useDispatch()
  const openPop = () => {dispatch(openModal("signIn"))}
  let variant;
  const headerIsOpen = () => {
    if (headerState === false) {
      variant = "close"
      return (
        <div className="header__button">
        <Button
          label={"Sing In"}
          variant={"transparent"}
          onClick={openPop}
        />
        </div>
      )
    } else if (headerState === true) {
      variant = "open"
      return (
        <div className="header__user" onClick={toUserProfile}>
        <User
          variant={"small"}
          userName={userState.userName}
          userPicUrl={userState.userPic}
          userPicAlt={userState.id}
        />
        </div>
      )
    }
  }
  let navigate = useNavigate();
  const nav = () => {navigate(`/`)}
  const className = `header header_${variant}`;
  function toUserProfile() {
    navigate(`/profile`)
    dispatch(passUserInfo(userState))
  }
  return (
    <div className={className}>
      <div className="header__wrapper">
        <div className="header__logo" onClick={nav}>
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
  isHeaderOpen: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  isHeaderOpen: false,
}
