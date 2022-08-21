import React from "react";
import Logo from "./logo"

export default {
  title: "Primitives/Logo",
  Component: Logo,
  argTypes: {
    color: {
      options: ["blue", "white"],
      control: {type: "radio"},
    }
  }
}

function Template(args) {
  return (
    <div style={{width:"26px"}}>
      <Logo {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  color: "blue"
}
