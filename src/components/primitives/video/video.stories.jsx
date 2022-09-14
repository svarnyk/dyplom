import React from "react";
import Video from "./video";

export default {
  title: "Primitives/Video",
  Component: Video,
  argTypes: {
    urlVideo: "https://www.youtube.com/watch?v=Euj_p2c6IBQ",
    variant: {
      options:["playButton", "checkMark", "progress"],
      control :{type: "radio"}
    },
  },
}

function Template(args){
  return(
    <div>
      <Video {...args}/>
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  urlVideo: "https://www.youtube.com/watch?v=Euj_p2c6IBQ",
  variant: "playButton",
}
