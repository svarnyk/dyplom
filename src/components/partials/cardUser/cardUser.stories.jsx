import React from "react";
import CardUser from "./cardUser";

export default {
  title: "Partials/CardUser",
  Component: CardUser,
  argTypes: {
    username: "Anna May",
    userPicUrl: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
    userPicAlt: "UserPic",
    videosCount: 1292,
    likesCount: 997,

  }
}

function Template(args) {
  return (
    <div>
      <CardUser {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  username: "Chester",
  userPicUrl: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
  userPicAlt: "UserPic",
  videosCount: 1292,
  likesCount: 997,
}