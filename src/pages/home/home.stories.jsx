import React from "react";
import HomePage from "./home";

export default {
  title: "pages/homePage",
  Component: HomePage,
  argTypes:{
    isHeaderOpen: {boolean: {action: false}},
    userName: "Chester",
    userPicUrl: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
    userPicAlt: "UserPic",
  }
}

function Template(args) {
  return (
    <div style={{height: "100%"}}>
      <HomePage {...args} />
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