import React from "react";
import AddNewVideo from "./addNewVideo";
import {action} from "@storybook/addon-actions";

export default {
  title: "Partials/AddNewVideo",
  Component: AddNewVideo,
  argTypes: {
    buttonOnClick: {action: "clicked"},
    cancelOnClick: {action: "clicked"},
  }
}

function Template(args){
  return(
    <div>
      <AddNewVideo{...args}/>
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  buttonOnClick: action("submit"),
  cancelOnClick: action("submit"),
}
