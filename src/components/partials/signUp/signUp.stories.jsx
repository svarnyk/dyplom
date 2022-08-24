import React from "react";
import SignUp from "./signUp";

export default {
  title: "Partials/SignUp",
  Component: SignUp,
  argTypes: {},

}

function Template(args) {
  return (
    <div>
      <SignUp {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
