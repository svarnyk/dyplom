import React from "react";
import ReactPlayer from "react-player";
import PlayButton from "./playButton/playButton";
import "./video.css";
import PropTypes from "prop-types";

export default function Video(props) {
  return (
    <div className="video">
      <ReactPlayer
        url={props.urlVideo}
        className={"react-player"}
        width={"100%"}
        height={"100%"}
        controls
        light={true}
        playIcon={<PlayButton/>}
      />
    </div>
  )
}

Video.PropTypes = {
  urlVideo: PropTypes.string.isRequired,
}

Video.defaultProps = {
  urlVideo: undefined,
}
