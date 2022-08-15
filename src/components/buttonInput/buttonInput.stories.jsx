// buttonInput.stories.js|jsx
import React from "react"
import { action } from "@storybook/addon-actions"
import ButtonInput from "./buttonInput"

export default {
  title: "COMPONENTS/Button Input",
  component: ButtonInput,
  argTypes: {
    withButton: {
      table: {
        defaultValue: { summary: "true" },
      },
    },
    buttonOnClick: { action: "clicked" },
  },
}

export function CustomButtonInput(args) {
  return <ButtonInput {...args} />
}
CustomButtonInput.args = {
  placeholder: "placeholder text",
  withButton: true,
  buttonLabel: "label",
  buttonOnClick: action("submit"),
}
