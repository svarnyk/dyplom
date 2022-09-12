import React from "react";
import Logo from "../../primitives/logo/logo";
import Button from "../../primitives/button/button";
import User from "../user/user";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {openModal} from "../../../store/modules/modal";
import "./header.css"
import { useNavigate } from "react-router-dom";
import {
  selectAuthoriseState,
  selectAuthUserName,
  selectAuthUserPic,
  selectAuthUserSlug
} from "../../../store/modules/authUser";

export default function Header() {
  const userName = useSelector(selectAuthUserName)
  const userSlug = useSelector(selectAuthUserSlug)
  const userPic = useSelector(selectAuthUserPic)
  const isUserAuthorised = useSelector(selectAuthoriseState)
  const dispatch = useDispatch()
  const openPop = () => {dispatch(openModal("signIn"))}
  let variant;
  const headerIsOpen = () => {
    if (isUserAuthorised === false) {
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
    } else if (isUserAuthorised === true) {
      variant = "open"
      return (
        <div className="header__user" onClick={toUserProfile}>
        <User
          variant={"small"}
          userName={userName}
          userPicUrl={userPic}
          userPicAlt={userSlug}
        />
        </div>
      )
    }
  }
  let navigate = useNavigate();
  const nav = () => {navigate(`/`)}
  const className = `header header_${variant}`;
  function toUserProfile() {
    navigate(`/profile/${userSlug}`)
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
