import React from "react";
import DescriptionForm from "./descriptionForm";
import { string } from "prop-types";
import {action} from "@storybook/addon-actions";

export default {
  title: "Primitives/DescriptionForm",
  Component: DescriptionForm,
  argTypes: {
    placeholder: string,
    heading: string,
    disabled: { boolean: { action: false } },
    descriptionValue: string,
    onDescriptionOnChange: {action: "changed"},
  }
}

function Template(args) {
  return (
    <div style={{width: "464px"}}>
      <DescriptionForm {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  placeholder: "Type description...",
  heading: "Description",
  disabled: false,
  descriptionValue: undefined,
  onDescriptionOnChange: action("submit"),
}
