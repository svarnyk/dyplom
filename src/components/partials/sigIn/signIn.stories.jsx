import React from "react";
import SignIn from "./signIn";

export default {
  title: "Partials/SignIn",
  Component: SignIn,
  argTypes: {},

}

function Template(args) {
  return (
    <div>
      <SignIn {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {}