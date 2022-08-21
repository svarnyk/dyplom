import React from "react";
import Button from "../../primitives/button/button";
import User from "../user/user";
import Counter from "../counter/counter";
import PropTypes from "prop-types";

import "./cardUser.css";


export default function CardUser(props) {
  return (
    <div className="cardUser">
      <div className="cardUser__user">
        <User variant={"middle"} userPicUrl={props.userPicUrl} userPicAlt={props.userPicAlt} userName={props.userName}/>
      </div>
      <div className="cardUser__counters">
        <div className="cardUser__counterVideos">
          <Counter variant={"videos"} count={props.videosCount} />
        </div>
        <div className="cardUser__counterLikes">
          <Counter variant={"likes"} count={props.likesCount} />
        </div>
      </div>
      <div className="cardUser__button">
        <Button variant={"primary"} label={"To profile"} stretch={false} onClick={props.onClick}/>
      </div>
    </div>
  );
}

CardUser.PropTypes = {
  userName: PropTypes.string.isRequired,
  userPicUrl: PropTypes.string.isRequired,
  userPicAlt: PropTypes.string.isRequired,
  videosCount: PropTypes.string.isRequired,
  likesCount: PropTypes.string.isRequired
};

CardUser.defaulProps = {
  userName: undefined,
  userPicUrl: undefined,
  userPicAlt: undefined,
  videosCount: undefined,
  likesCount: undefined
};
