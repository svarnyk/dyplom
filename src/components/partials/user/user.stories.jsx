import React from "react";
import User from "./user";

export default {
  title: "Partials/User",
  Component: User,
  argTypes: {
    variant: {
      options: ["small", "middle", "large"],
      control: { type: "radio" },
    },
    username: "Anna May",
    userPicUrl: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
    userPicAlt: "UserPic",

  }
}

function Template(args) {
  return (
    <div>
      <User {...args} />
    </div>
  )
}

export const Small = Template.bind({})

Small.args = {
  variant: "small",
  username: "Chester",
  userPicUrl: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
  userPicAlt: "UserPic",
}

export const Middle = Template.bind({})

Middle.args = {
  ...Small.args,
  variant: "middle",
}
export const Large = Template.bind({})

Large.args = {
  ...Small.args,
  variant: "large",
}