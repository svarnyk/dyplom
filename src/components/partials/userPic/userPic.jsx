import React from "react";
import Image from "../../primitives/image";
import PropTypes from "prop-types";

import './userPic.css';

export default function UserPic(props) {
  return (
    <div className="userPic">
      <Image src={props.url} alt={props.alt} fit={"cover"}/>
    </div>
  )
}
UserPic.PropTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
UserPic.defaultProps = {}