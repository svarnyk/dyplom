import React from "react";
import {action} from "@storybook/addon-actions";
import Input from "./input";

export default {
  title: "Primitives/Input",
  Component: Input,
  argTypes: {
    variant: {
      options: ["text", "password"],
      control: {type: "radio"}
    },
    placeholder: "Past link...",
    disabled: { boolean: { action: false } },
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
  variant: "text",
  placeholder: "Past link...",
  disabled: false,
  // withButton: true,
  // buttonLabel: "label",
  // buttonOnClick: action("submit"),
}
