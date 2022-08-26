import React from "react";
import Modal from "./modal";

export default {
  title: "Partials/Modal",
  Component: Modal,
  argTypes: {},
}

function Template(args) {
  return (
    <div>
      <Modal {...args} />
    </div>
  );
}

export const ModalSignUp = Template.bind({});

ModalSignUp.args = {};