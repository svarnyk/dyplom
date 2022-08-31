import React from "react";
import SignUp from "./signUp";
import {action} from "@storybook/addon-actions";

export default {
  title: "Partials/SignUp",
  Component: SignUp,
  argTypes: {
    buttonOnClick: {action: "clicked"},
    crossOnClick: {action: "clicked"},
    signInOnClick: {action: "clicked"},
  }
}

function Template(args) {
  return (
    <div>
      <SignUp {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  buttonOnClick: action("submit"),
  crossOnClick: action("submit"),
  signInOnClick: action("submit"),
}
