import React from "react";
import UserPic from "./userPic";

export default {
  title: "Partials/UserPic",
  Component: UserPic,
  argTypes: {
    variant: {
      options: ["small", "middle", "large"],
      control: { type: "radio" },
    },
    url: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
    alt: "userPic"
  }
};

function Template(args) {
  return (
    <div>
      <UserPic {...args}/>
    </div>
  );
}

export const Small = Template.bind({});

Small.args = {
  variant: "small",
  url: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
  alt: "userPic"
}

export const Middle = Template.bind({});
Middle.args = {
  ...Small.args,
  variant: "middle",
}

export const Large = Template.bind({});
Large.args = {
  ...Small.args,
  variant: "large",
}
