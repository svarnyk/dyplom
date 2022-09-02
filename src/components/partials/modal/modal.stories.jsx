import React from "react";
import Modal from "./modal";
import {action} from "@storybook/addon-actions";

export default {
  title: "Partials/Modal",
  Component: Modal,
  argTypes: {
    signInRemindPas: {boolean: {action: false}},
    addVideoOnClick: {action: "clicked"},
    toVideoOnClick: {action: "clicked"},
    signInOnClick: {action: "clicked"},
    signUpOnClick: {action: "clicked"},
  },
}

function Template(args) {
  return (
    <div>
      <Modal {...args} />
    </div>
  );
}

export const ModalSignUp = Template.bind({});

ModalSignUp.args = {
  signInRemindPas: false,
  addVideoOnClick: action("submit"),
  toVideoOnClick: action("submit"),
  signInOnClick: action("submit"),
  signUpOnClick: action("submit"),
}
