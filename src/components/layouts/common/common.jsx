/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Footer from "../../partials/footer/footer";
import Header from "../../partials/header/header";
import "./common.css";
import Modal from "../../partials/modal/modal";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { closeModal} from "../../../store/modalSlice";

export default function DefaultLayout(props) {
  const dispatch = useDispatch()
  function cleverPopup(){
    const isVisible = useSelector (state => state.modal.modalStatus)
    const componentName = useSelector (state => state.modal.modalVariant)

    function handleClose(){
      console.log("тут колись буде екшон");
      dispatch(closeModal())
    }

    function getVisibleStatus(){
      if (isVisible === "hidden") return "hidden";
      if (isVisible === "active") return "active";
      return null;
    }

    function getFormComponent(){
      if (componentName === "signUp") return "signUp";
      if (componentName === "signIn") return "signIn";
      if (componentName === "addNewVideo") return "addNewVideo";
      return null;
    }
    return (<Modal
      modalStatus={getVisibleStatus()}
      modalVariant={getFormComponent()}
      onCancel={handleClose}
    />)
  }
  return (
    <div className="siteContent">
      <div className="siteContent__header">
        {/*HEADER*/}
        <Header/>
      </div>
      <div className="siteContent__content">{props.children}</div>
      <div className="siteContent__modal">
        {/*MODAL*/}
        {cleverPopup()}
      </div>
      <div className="siteContent__footer">
        {/*FOOTER*/}
        <Footer/>
      </div>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isHeaderOpen:PropTypes.bool,
  userName:PropTypes.string,
  userPicUrl:PropTypes.string,
  userPicAlt:PropTypes.string,
}
DefaultLayout.defaultProps = {
  children:undefined,
  isHeaderOpen:false,
  userName:undefined,
  userPicUrl:undefined,
  userPicAlt:undefined,
}
