import React from "react";
import UserPic from "../userPic/userPic";
import Heading from "../../primitives/heading/heading";
import PropTypes from "prop-types";

import "./user.css";

export default function User (props) {
  const className = `user user_${props.variant}`;
  const headingWeight = () => {
    if (props.variant==="small") {
      return 5
    }
    else if (props.variant==="middle") {
      return 3
    }
    else if (props.variant==="large") {
      return 1
    }
  };
  return (
    <div className={className}>
      <div className="user__userPic">
        <UserPic url={props.userPicUrl} alt={props.userPicAlt} variant={props.variant}/>
      </div>
      <div className="user__userName">
        <Heading weight={headingWeight()}>{props.username}</Heading>
      </div>
    </div>
  )
}

User.PropTypes = {
  variant: PropTypes.oneOf(["small", "middle", "large"]),
  userPicUrl: PropTypes.string.isRequired,
  userPicAlt: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}
User.defaultProps = {
  variant: "middle",
  userPicUrl: undefined,
  userPicAlt: undefined,
  username: undefined,
}