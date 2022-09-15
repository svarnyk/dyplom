import React from "react";
import CardUser from "../cardUser/cardUser";
import Heading from "../../primitives/heading/heading";
import {GiFallingStar} from "react-icons/gi";
import "./bestCreators.css";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { sortUsersByUserName } from "../../../store/modules/usersList";
import { selectVideos } from "../../../store/modules/videosList";

export default function BestCreators() {
  const sortUserByName = useSelector(sortUsersByUserName)

  const videosList = useSelector(selectVideos)
  const getQuantityOfUserVideo = (userId) => {
    return videosList.filter((video)=>video.userId===userId).length
  }
  const navigate = useNavigate();
  const result = sortUserByName.map((user) => <CardUser
    userName={user.userName}
    userPicUrl={user.userPic}
    userPicAlt={user.id}
    onClick={()=>{navigate(`/profile/${user.slug}`)}}
    videosCount={getQuantityOfUserVideo(user.id)}
    likesCount={0}
  />);


  return (
    <div className="bestCreators">
      <div className="bestCreators__heading">
        <Heading weight={2}>Best Creators</Heading>
        <div className="bestCreators__star">
          <GiFallingStar
            color={"#FFA959"}
            size={"30px"}
          />
        </div>
      </div>
      <div className="bestCreators__users">
        {result}
      </div>
    </div>
  );
}
