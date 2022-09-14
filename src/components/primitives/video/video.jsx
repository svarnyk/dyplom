import React from "react";
import ReactPlayer from "react-player";
import PlayButton from "./playButton/playButton";
import "./video.css";
import PropTypes from "prop-types";
import CheckMark from "./checkMark/checkMark";
import Progress from "./progres/progress";

export default function Video(props) {
  const variant = () =>{
    if (props.variant==="playButton"){
      return(<PlayButton />)
    }
    else if (props.variant==="checkMark"){
      return(<CheckMark />)
    }
    else if(props.variant==="progress"){
      return (<Progress />)
    }
  }
  return (
    <div className="video">
      <ReactPlayer
        url={props.urlVideo}
        className={"react-player"}
        width={"100%"}
        height={"100%"}
        controls
        light={true}
        playIcon={variant()}
      />
    </div>
  )
}

Video.PropTypes = {
  urlVideo: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["playButton", "checkMark", "progress"]),
}

Video.defaultProps = {
  urlVideo: undefined,
  variant: "playButton",
}
