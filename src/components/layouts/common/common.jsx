import React from "react";
import PropTypes from "prop-types";
import Footer from "../../partials/footer/footer";
import Header from "../../partials/header/header";
import "./common.css";

export default function DefaultLayout(props) {
  return (
    <div className="siteContent">
      <div className="siteContent__header">
        {/*HEADER*/}
        <Header
        isHeaderOpen={props.isHeaderOpen}
        userName={props.userName}
        userPicUrl={props.userPicUrl}
        userPicAlt={props.userPicAlt}
        />
      </div>
      <div className="siteContent__content">{props.children}</div>
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
