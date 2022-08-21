import React from "react";
import Header from "./header";

export default {
  title: "Partials/Header",
  Component: Header,
  argTypes: {
    variant: {
      options: ["open", "close"],
      control: {type: "radio"}
    }
  }
}

function Template(args) {
  return (
    <div>
      <Header {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  variant: "close"
}
