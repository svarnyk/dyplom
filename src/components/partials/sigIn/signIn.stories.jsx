import React from "react";
import SignIn from "./signIn";
import { action } from "@storybook/addon-actions";

export default {
  title: "Partials/SignIn",
  Component: SignIn,
  argTypes: {
    remindPassword: {boolean: {action: false}},
    buttonOnClick: {action: "clicked"},
    crossOnClick: {action: "clicked"},
    signUpOnClick: {action: "clicked"},
  },

}

function Template(args) {
  return (
    <div>
      <SignIn {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  remindPassword: false,
  buttonOnClick: action("submit"),
  crossOnClick: action("submit"),
  signUpOnClick: action("submit"),
}
