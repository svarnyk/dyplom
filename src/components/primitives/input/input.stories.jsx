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
    disabled: { boolean: { action: false } },
    heading: string,
    //   table: {
    //     defaultValue: { summary: "true" },
    //   },
    // },
    // buttonOnClick: { action: "clicked" },
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
  heading: "Input"
  // withButton: true,
  // buttonLabel: "label",
  // buttonOnClick: action("submit"),
}
