import React, { useEffect } from "react";
import VideoCard from "../videoCard/videoCard";
import Button from "../../primitives/button/button";
import Heading from "../../primitives/heading/heading";
import { FaYoutube } from "react-icons/fa";
import "./videoGallery.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../store/modalSlice";
import { fetchVideos } from "../../../store/videosSlice";

export default function VideoGallery(props) {
  const dispatch = useDispatch();
  const openPop = () => {
    dispatch(openModal("addNewVideo"));
  };
  const content = useSelector(state => state.videos.content);
  const userStateId = useSelector(state => state.user.userInform.id);
  let selectVideos = content.filter(function(video) {
    return video.userId === userStateId;
  });

  const result = selectVideos.map((video) =>
    <VideoCard
      urlVideo={video.url}
      videoName={video.title}
      videoDescription={video.description}
    />
  );

  const headingClassName = `${props.heading}'s videos`;

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <div className="videoGallery">
      <div className="videoGallery__header">
        <div className="videoGallery__heading">
          <Heading weight={2}>{headingClassName}</Heading>
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
            onClick={openPop}
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
  heading: PropTypes.string
};
VideoGallery.defaultProps = {
  heading: undefined
};
