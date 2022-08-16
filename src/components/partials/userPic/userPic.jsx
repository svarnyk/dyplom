import React from "react";
import Image from "../../primitives/image";
import PropTypes, { oneOf } from "prop-types";

import './userPic.css';

export default function UserPic(props) {
  const className = `userPic userPic_${props.variant}`;
  return (
    <div className={className}>
      <Image src={props.url} alt={props.alt} fit={"cover"}/>
    </div>
  )
}
UserPic.PropTypes = {
  variant: PropTypes.oneOf(["small", "middle", "large"]),
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
UserPic.defaultProps = {
  variant: "middle",
  url: undefined,
  alt: undefined,
}