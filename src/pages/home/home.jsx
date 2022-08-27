import React from "react";
import DefaultLayout from "../../components/layouts/common/common";
import "./home.css";
import PropTypes from "prop-types";
import Heading from "../../components/primitives/heading/heading";
import Button from "../../components/primitives/button/button";


export default function HomePage(props) {
  return (
    <DefaultLayout
      isHeaderOpen={props.isHeaderOpen}
      userName={props.userName}
      userPicUrl={props.userPicUrl}
      userPicAlt={props.userPicAlt}
    >
      <div className="homePage__wrapper">
        <div className="homePage__heading">
          <Heading weight={1}><span style={{textAlign: "center", overflowWrap: "break-word"}}>Welcome To <span style={{color:"#FF6363"}}>VideoNova</span></span></Heading>
        </div>
        <div className="homePage__greeting">
          <Heading weight={5}><span style={{textAlign: "center"}}>Create videos with a single click. Add subtitles, transcribe audio and more</span></Heading>
        </div>
        <div className="homePage__button">
          <Button
          label={"Start Now"}
          variant={"primary"}
          onClick={props.homeButtonOnClick}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

HomePage.PropTypes = {
  isHeaderOpen: PropTypes.bool,
  userName: PropTypes.string,
  userPicUrl: PropTypes.string,
  userPicAlt: PropTypes.string,
  homeButtonOnClick: PropTypes.func
};
HomePage.defaultProps = {
  isHeaderOpen: false,
  userName: undefined,
  userPicUrl: undefined,
  userPicAlt: undefined,
  homeButtonOnClick:undefined,
};

