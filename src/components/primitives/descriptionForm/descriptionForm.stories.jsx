import React from "react";
import DescriptionForm from "./descriptionForm";
import {bool, string} from "prop-types";

export default {
  title: "Primitives/DescriptionForm",
  Component: DescriptionForm,
  argTypes: {
    placeholder: string,
    heading: string,
    disabled: { boolean: { action: false } },
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
}
