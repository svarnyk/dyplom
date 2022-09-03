import React from "react";
import Modal from "./modal";
import {action} from "@storybook/addon-actions";

export default {
  title: "Partials/Modal",
  Component: Modal,
  argTypes: {
    modalVariant: {
      options: ["signUp", "signIn", "addNewVideo"],
      control: {type: "radio"},
    },
    modalStatus: {
      options: ["active", "hidden"],
      control: {type: "radio"},
    },
    onCancel: {action: "clicked"},

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
  modalVariant: "signUp",
  modalStatus: "active",
  onCancel: action("submit"),

  signInRemindPas: false,
  addVideoOnClick: action("submit"),
  toVideoOnClick: action("submit"),
  signInOnClick: action("submit"),
  signUpOnClick: action("submit"),
}
