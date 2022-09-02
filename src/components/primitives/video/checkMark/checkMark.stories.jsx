import React from "react";
import CheckMark from "./checkMark";

export default {
  title: "Primitives/CheckMark",
  Component: CheckMark,
  argTypes:{}
}

function Template (args) {
  return(
    <div>
      <CheckMark{...args}/>
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
