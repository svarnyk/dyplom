import React from "react";
import UserPic from "./userPic";

export default {
  title: "Partials/UserPic",
  Component: UserPic,
  argTypes: {
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

export const Primary = Template.bind({});

Primary.args = {
  url: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
  alt: "userPic"
}