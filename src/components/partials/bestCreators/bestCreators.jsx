import React from "react";
import CardUser from "../cardUser/cardUser";
import Heading from "../../primitives/heading/heading";
import { GiFallingStar } from "react-icons/gi";
import PropTypes from "prop-types";
import "./bestCreators.css";

export default function BestCreators(props) {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const content = props.content;
  const result = content.map((user) => <CardUser
    userName={user.userName}
    userPicUrl={user.userPic}
    userPicAlt={user.userName}
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

BestCreators.PropTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string,
      userPic: PropTypes.string
    }))
};

BestCreators.defaultProps = {
  content: undefined,
};