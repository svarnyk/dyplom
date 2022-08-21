import React from "react";
import Image from "../image";
import PropTypes from "prop-types";
import LogoColor from "./images/Logo_color.png";
import LogoMonochrome from "./images/Logo_monochrome.png";

export default function Logo(props) {
  const color = () => {
    if (props.color === "blue") {
      return LogoColor
    } else if (props.color === "white") {
      return LogoMonochrome
    }
  };
    const className = `logo logo_${props.color}`;
    return (
      <div className={className}>
        <Image src={color()} alt={"Logo"} fit={"cover"}/>
      </div>
    )
}

Logo.PropTypes = {
  color: PropTypes.oneOf(["blue", "white"]).isRequired
}

Logo.defaultProps = {
  color: "blue"
}
