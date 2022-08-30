import React from "react";
import PlayButton from "./playButton";

export default {
  title: "Primitives/PlayButton",
  Component: PlayButton,
  argTypes:{}
}

function Template (args) {
  return(
    <div>
      <PlayButton{...args}/>
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
