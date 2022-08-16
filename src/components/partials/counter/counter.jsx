import React from "react";
import Heading from "../../primitives/heading/heading";
import { BsHeart } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import PropTypes from "prop-types";

import "./counter.css";

export default function Counter(props) {
  const like = () => {
    return (
      <BsHeart
        size={18}
        color={"#292D32"}
      />
    );
  };

  const youtube = () => {
    return (
      <FiYoutube
        size={20}
        color={"#292D32"}
      />
    );
  };

  let className = `counter counter_${props.variant}`;
  const icon = () => {
    if (props.variant === "likes") {
       return(like())
    } else if (props.variant === "videos") {
      return (youtube())
    }
  }
  const number = new Intl.NumberFormat('en-US').format(props.count)

  return (
    <div className={className}>
      <div className="counter__icon">
        {icon()}
      </div>
      <Heading weight={5}>{number} {props.variant}</Heading>
    </div>
  );
}

Counter.PropTypes = {
  variant: PropTypes.oneOf(["likes", "videos"]),
  count: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  variant: undefined,
  count: undefined
};