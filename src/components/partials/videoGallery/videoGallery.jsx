import React from "react";
import VideoCard from "../videoCard/videoCard";
import Button from "../../primitives/button/button";
import Heading from "../../primitives/heading/heading";
import "./videoGallery.css";

export default function VideoGallery(props) {
  return (
    <div className="videoGallery">
      <div className="videoGallery__header">
        <div className="videoGallery__heading">
          <Heading weight={2}>{props.heading}</Heading>
        </div>
        <div className="videoGallery__button">
          <Button
            label={"Add video"}
            variant={"Primary"}
            stretch={false}
          />
        </div>
      </div>
      <div className="videoGallery__ gallery"></div>
    </div>
  )
}
