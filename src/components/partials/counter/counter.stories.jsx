import React from "react";
import Counter from "./counter";

export default {
  title: "partials/counter",
  Component: Counter,
  argTypes: {
    count: 193,
    variant: {
      options: ['likes', 'videos'],
      control: {type: 'radio'},
    },
  }
}

function Template(args) {
  return (
    <div>
      <Counter {...args}/>
    </div>
  );
}

export const Primary = Template.bind({});

Primary.args = {
  count: 193,
  variant: 'likes',
}