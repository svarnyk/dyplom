import React from "react"
import SiteBlock from "./siteBlock.component"
import Placeholder from "../placeholder"

export default {
  title: "primitives/Site Block",
  component: SiteBlock,
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

function Template(args) {
  return (
    <>
      <SiteBlock>
        <Placeholder size={{ height: "50px" }} title="Default Block Content" />
      </SiteBlock>
      <SiteBlock {...args}>
        <Placeholder size={{ height: "50px" }} title="Testing Block Content" />
      </SiteBlock>
      <SiteBlock>
        <Placeholder size={{ height: "50px" }} title="Default Block Content" />
      </SiteBlock>
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const FullSize = Template.bind({})
FullSize.args = {
  fullSize: true,
}

export const WithBackground = Template.bind({})
WithBackground.args = {
  backgroundColor: "#fbd10d",
}

export const CustomPaddings = Template.bind({})
CustomPaddings.args = {
  backgroundColor: "#fbd10d",
  padding: {
    top: 10,
    bottom: 10,
  },
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  title: "This is the block title",
}
