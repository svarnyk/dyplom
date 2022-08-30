import React from "react";
import Video from "../../primitives/video/video";
import Heading from "../../primitives/heading/heading";
import "./videoCard.css";
import PropTypes from "prop-types";

export default function VideoCard(props) {
  return (
    <div className="videoCard">
      <div className="videoCard__video">
        <Video
          urlVideo={props.urlVideo}
        />
      </div>
      <div className="videoCard__videoName">
        <Heading weight={3}>{props.videoName}</Heading>
      </div>
      <div className="videoCard__videoDescription">
        <Heading weight={5}>{props.videoDescription}</Heading>
      </div>
    </div>
  )
}

VideoCard.PropTypes = {
  urlVideo: PropTypes.string.isRequired,
  videoName: PropTypes.string.isRequired,
  videoDescription: PropTypes.string.isRequired,
}

VideoCard.defaultProps = {
  urlVideo: undefined,
  videoName: undefined,
  videoDescription: undefined,
}
