import React from "react";
import VideoCard from "../videoCard/videoCard";
import Button from "../../primitives/button/button";
import Heading from "../../primitives/heading/heading";
import { FaYoutube } from "react-icons/fa";
import "./videoGallery.css";
import PropTypes from "prop-types";

export default function VideoGallery(props) {
  const content = props.content;
  const result = content.map((video) =>
    <VideoCard
      urlVideo={video.url}
      videoName={video.title}
      videoDescription={video.description}
    />
  );
  return (
    <div className="videoGallery">
      <div className="videoGallery__header">
        <div className="videoGallery__heading">
          <Heading weight={2}>{props.heading}</Heading>
          <FaYoutube
          size={"20px"}
          color={"#292D32"}
          />
        </div>
        <div className="videoGallery__button">
          <Button
            label={"Add video"}
            variant={"primary"}
            stretch={false}
            onClick={props.buttonOnClick}
          />
        </div>
      </div>
      <div className="videoGallery__gallery">
        {result}
      </div>
    </div>
  );
}

VideoGallery.PropTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })),
  heading: PropTypes.string,
  buttonOnClick: PropTypes.func,
};
VideoGallery.defaultProps = {
  content: undefined,
  heading: undefined,
  buttonOnClick: undefined
};
