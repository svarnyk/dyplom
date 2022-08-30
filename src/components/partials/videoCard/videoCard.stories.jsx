import React from "react";
import VideoCard from "./videoCard";
import {string} from "prop-types";

export default {
  title: "Partials/VideoCard",
  Component: VideoCard,
  argTypes:{
    urlVideo: string,
    videoName: string,
    videoDescription: string,
  }
}

function Template(args) {
  return(
    <div>
      <VideoCard{...args}/>
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  urlVideo: "https://www.youtube.com/watch?v=Euj_p2c6IBQ",
  videoName: "Once Upon a December",
  videoDescription: "A little singer performs a song that immerses you in a winter fairy tale",
}
