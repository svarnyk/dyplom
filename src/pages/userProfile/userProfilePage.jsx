import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import DefaultLayout from "../../components/layouts/common/common"
import User from "../../components/partials/user/user"
import VideoGallery from "../../components/partials/videoGallery/videoGallery"
import "./userProfilePage.css"
import { fetchUsers, selectUserBySlug } from "../../store/modules/usersList"
import { fetchVideos } from "../../store/modules/videosList"
import {
  passUserInfo,
  selectUserName,
  selectUserPic,
  selectUserSlug,
} from "../../store/modules/user"

export default function UserProfilePage() {
  const routeParams = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  useEffect(() => {
    dispatch(fetchVideos())
  }, [dispatch])
  const userName = useSelector(selectUserName)
  const userPic = useSelector(selectUserPic)
  const userSlug = useSelector(selectUserSlug)
  const currentUserSlug = useSelector(selectUserBySlug(routeParams.id))
  useEffect(() => {
    dispatch(passUserInfo(currentUserSlug))
  }, [dispatch, currentUserSlug])
  return (
    <DefaultLayout>
      <div className="userProfilePage__wrapper">
        <div className="userProfilePage__user">
          <User
            variant="large"
            userName={userName}
            userPicUrl={userPic}
            userPicAlt={userSlug}
          />
        </div>
        <div className="userProfilePage__gallery">
          <VideoGallery heading={userName} />
        </div>
      </div>
    </DefaultLayout>
  )
}
