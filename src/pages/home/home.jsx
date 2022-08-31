import React from "react";
import DefaultLayout from "../../components/layouts/common/common";
import "./home.css";
import PropTypes from "prop-types";
import Heading from "../../components/primitives/heading/heading";
import Button from "../../components/primitives/button/button";
import BestCreators from "../../components/partials/bestCreators/bestCreators";


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
          <Heading weight={1}>Welcome To <span style={{color:"#FF6363"}}>VideoNova</span></Heading>
        </div>
        <div className="homePage__greeting">
          <Heading weight={5}>Create videos with a single click. Add subtitles, transcribe audio and more</Heading>
        </div>
        <div className="homePage__button">
          <Button
          label={"Start Now"}
          variant={"primary"}
          onClick={props.homeButtonOnClick}
          />
        </div>
        <div className="homePage__users">
          <BestCreators
          content={props.content}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

HomePage.PropTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string,
      userPic: PropTypes.string
    })),
  isHeaderOpen: PropTypes.bool,
  userName: PropTypes.string,
  userPicUrl: PropTypes.string,
  userPicAlt: PropTypes.string,
  homeButtonOnClick: PropTypes.func
};
HomePage.defaultProps = {
  content:undefined,
  isHeaderOpen: false,
  userName: undefined,
  userPicUrl: undefined,
  userPicAlt: undefined,
  homeButtonOnClick:undefined,
};

