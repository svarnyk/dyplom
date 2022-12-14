import React from "react"
import Heading from "./heading"

export default {
  title: "Primitives/Heading",
  component: Heading,
  argTypes: {
    weight: {
      weight: [1, 2, 3, 4, 5, 6],
      control: { type: "radio" },
    },
  },
}

export function Heading1(args) {
  return <Heading {...args}>Welcome To VideoNova</Heading>
}

Heading1.args = {
  weight: 1,
}

export function Heading2(args) {
  return <Heading {...args}>Best Creators</Heading>
}

Heading2.args = {
  weight: 2,
}

export function Heading3(args) {
  return <Heading {...args}>Anna May</Heading>
}

Heading3.args = {
  weight: 3,
}

export function Heading4(args) {
  return <Heading {...args}>All Rights Reserved 2022</Heading>
}

Heading4.args = {
  weight: 4,
}

export function Heading5(args) {
  return <Heading {...args}>Create videos with a single click. Add subtitles, transcribe audio and more</Heading>
}

Heading5.args = {
  weight: 5,
}

export function Heading6(args) {
  return <Heading {...args}>Heading6</Heading>
}

Heading6.args = {
  weight: 6,
}

export function Description() {
  return (
    <div>
      <h2>Heading component</h2>
      <p>
        Generates the H tag with a &quot;weight&quot; parameter from 1 to 6.
      </p>
      <p>
        {" "}
        If another value of &quot;weight&quot; parameter is set generates the
        nearest value in the range from 1 to 6
      </p>
      <p>
        {" "}
        If &quot;plain&quot; parameter is set generates a div tag with the
        headingX class instead of the H tag
      </p>
    </div>
  )
}
