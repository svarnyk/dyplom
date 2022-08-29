import React from "react";
import SignUp from "./signUp";
import {action} from "@storybook/addon-actions";

export default {
  title: "Partials/SignUp",
  Component: SignUp,
  argTypes: {
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
  crossOnClick: action("submit"),
  signInOnClick: action("submit"),
}
