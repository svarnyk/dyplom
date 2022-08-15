import React from "react"
import Heading from "./heading"

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    weight: {
      weight: [1, 2, 3, 4, 5, 6],
      control: { type: "radio" },
    },
  },
}

export function Heading1(args) {
  return <Heading {...args}>Heading1</Heading>
}

Heading1.args = {
  weight: 1,
}

export function Heading2(args) {
  return <Heading {...args}>Heading2</Heading>
}

Heading2.args = {
  weight: 2,
}

export function Heading3(args) {
  return <Heading {...args}>Heading3</Heading>
}

Heading3.args = {
  weight: 3,
}

export function Heading4(args) {
  return <Heading {...args}>Heading4</Heading>
}

Heading4.args = {
  weight: 4,
}

export function Heading5(args) {
  return <Heading {...args}>Heading5</Heading>
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
