import React from "react"
import Button from "./button"

export default {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    label: "Button",
    stretch: { boolean: { action: false } },
    disabled: { boolean: { action: false } },
    spinner: { boolean: { action: false } },
    variant: {
      options: ["primary", "transparent", "link"],
      control: { type: "radio" },
    },
  },
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Button {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  label: "Button",
  variant: "primary",
  onClick: "https://google.com",
}

export const DisabledPrimary = Template.bind({})
DisabledPrimary.args = {
  ...Primary.args,
  disabled: true,
}
export const StretchPrimary = Template.bind({})
StretchPrimary.args = {
  ...Primary.args,
  stretch: true,
}


export const Transparent = Template.bind({})
Transparent.args = {
  ...Primary.args,
  variant: "transparent",
}

export const DisabledTransparent = Template.bind({})
DisabledTransparent.args = {
  ...Primary.args,
  variant: "transparent",
  disabled: true,
}

export const StretchTransparent = Template.bind({})
StretchTransparent.args = {
  ...Primary.args,
  variant: "transparent",
  stretch: true,
}


export const Link = Template.bind({})
Link.args = {
  ...Primary.args,
  variant: "link",
}

export const DisabledLink = Template.bind({})
DisabledLink.args = {
  ...Primary.args,
  variant: "link",
  disabled: true,
}
