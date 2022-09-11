import React from "react";
import CardUser from "../cardUser/cardUser";
import Heading from "../../primitives/heading/heading";
import {GiFallingStar} from "react-icons/gi";
import "./bestCreators.css";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {passUserInfo} from "../../../store/modules/user";
import {selectUsers} from "../../../store/modules/usersList";

export default function BestCreators() {
  const dispatch = useDispatch();
  const usersLIst = useSelector(selectUsers)
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let navigate = useNavigate();
  function getUserInfo(userId) {
    let user = usersLIst.find(user=>user.id===userId)
    console.log(user)
    navigate(`/profile`)
    dispatch(passUserInfo(user))
  }
  const result = usersLIst.map((user) => <CardUser
    userName={user.userName}
    userPicUrl={user.userPic}
    userPicAlt={user.id}
    onClick={()=>{getUserInfo(user.id)}}
    videosCount={getRandomIntInclusive(10, 150)}
    likesCount={getRandomIntInclusive(100, 10000)}
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
