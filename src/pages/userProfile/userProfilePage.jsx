import React from "react";
import DefaultLayout from "../../components/layouts/common/common";
import PropTypes from "prop-types";
import User from "../../components/partials/user/user";
import VideoGallery from "../../components/partials/videoGallery/videoGallery";
import "./userProfilePage.css"


export default function UserProfilePage(props) {
  return (
    <DefaultLayout
      isHeaderOpen={props.isHeaderOpen}
      userName={props.userName}
      userPicUrl={props.userPicUrl}
      userPicAlt={props.userPicAlt}>
      <div className="userProfilePage__wrapper">
        <div className="userProfilePage__user">
          <User
            variant={"large"}
            userName={props.userName}
            userPicUrl={props.userPicUrl}
            userPicAlt={props.userPicAlt}
          />
        </div>
        <div className="userProfilePage__gallery">
          <VideoGallery
            content={props.content}
            heading={props.userName}
            buttonOnClick={props.buttonOnClick}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

UserProfilePage.PropTypes = {
  isHeaderOpen: PropTypes.bool,
  userName: PropTypes.string,
  userPicUrl: PropTypes.string,
  userPicAlt: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })),
  buttonOnClick: PropTypes.func,
};
UserProfilePage.defaultProps = {
  isHeaderOpen: true,
  userName: undefined,
  userPicUrl: undefined,
  userPicAlt: undefined,
  content: undefined,
  buttonOnClick: undefined
};