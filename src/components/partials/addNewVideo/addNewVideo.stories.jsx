import React from "react";
import AddNewVideo from "./addNewVideo";

export default {
  title: "Partials/AddNewVideo",
  Component: AddNewVideo,
  argTypes: {}
}

function Template(args){
  return(
    <div>
      <AddNewVideo{...args}/>
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
