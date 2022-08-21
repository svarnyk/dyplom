import React from "react";
import Header from "./header";

export default {
  title: "Partials/Header",
  Component: Header,
  argTypes: {
    isHeaderOpen: {boolean: {action: false}},
    userName: "Chester",
    userPicUrl: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
    userPicAlt: "UserPic",
  }
}

function Template(args) {
  return (
    <div>
      <Header {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  isHeaderOpen: false,
  userName: "Chester",
  userPicUrl: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
  userPicAlt: "UserPic",
}
