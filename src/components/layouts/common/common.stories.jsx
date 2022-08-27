import React from "react";
import DefaultLayout from "./common"

export default {
  title: "layouts/defaultLayout",
  Component: DefaultLayout,
  argTypes:{
    children:"CHILDREN",
    isHeaderOpen:{boolean:{type: false}},
      userName:"Chester",
    userPicUrl:"https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
    userPicAlt:"UserPic",
  }
}

function Template(args){
  return(
    <div>
      <DefaultLayout {...args}/>
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  children:"CHILDREN",
  isHeaderOpen:false,
  userName:"Chester",
  userPicUrl:"https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
  userPicAlt:"UserPic",
}

