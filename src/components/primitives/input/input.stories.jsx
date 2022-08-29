import React from "react";
import {action} from "@storybook/addon-actions";
import Input from "./input";
import {string} from "prop-types";

export default {
  title: "Primitives/Input",
  Component: Input,
  argTypes: {
    variant: {
      options: ["text", "password"],
      control: {type: "radio"}
    },
    placeholder: string,
    disabled: {boolean: {action: false}},
    heading: string,
    remindPassword: {boolean: {action: false}},
    remindButtonFunc: {action: "clicked"},
    passwordValue: string,
    onInputPasswordOnChange: {action: "changed"},
    nameValue: string,
    onInputNameOnChange: {action: "changed"},
  },
}

function Template(args) {
  return (
    <div style={{width: "464px"}}>
      <Input {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  variant: "password",
  placeholder: "Past link...",
  disabled: false,
  heading: "Input",
  remindPassword: false,
  passwordValue:undefined,
  onInputPasswordOnChange:action("submit"),
  nameValue:undefined,
  onInputNameOnChange:action("submit"),
}
