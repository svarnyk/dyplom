import React from "react";
import DefaultLayout from "../../components/layouts/common/common";
import User from "../../components/partials/user/user";
import VideoGallery from "../../components/partials/videoGallery/videoGallery";
import "./userProfilePage.css"
import { useSelector } from "react-redux";


export default function UserProfilePage() {
  const userState = useSelector(state => state.user.userInform)
  return (
    <DefaultLayout>
      <div className="userProfilePage__wrapper">
        <div className="userProfilePage__user">
          <User
            variant={"large"}
            userName={userState.userName}
            userPicUrl={userState.userPic}
            userPicAlt={userState.id}
          />
        </div>
        <div className="userProfilePage__gallery">
          <VideoGallery
            heading={userState.userName}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
