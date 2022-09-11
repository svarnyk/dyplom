import React, {useEffect} from "react";
import DefaultLayout from "../../components/layouts/common/common";
import User from "../../components/partials/user/user";
import VideoGallery from "../../components/partials/videoGallery/videoGallery";
import "./userProfilePage.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../store/modules/usersList";
import {fetchVideos} from "../../store/modules/videosList";
import {selectUserName, selectUserPic, selectUserSlug} from "../../store/modules/user";



export default function UserProfilePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  const userName = useSelector(selectUserName)
  const userPic = useSelector(selectUserPic)
  const userSlug = useSelector(selectUserSlug)

  return (
    <DefaultLayout>
      <div className="userProfilePage__wrapper">
        <div className="userProfilePage__user">
          <User
            variant={"large"}
            userName={userName}
            userPicUrl={userPic}
            userPicAlt={userSlug}
          />
        </div>
        <div className="userProfilePage__gallery">
          <VideoGallery
            heading={userName}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
