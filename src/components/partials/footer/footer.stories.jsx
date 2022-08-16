import React from "react"
import Footer from "./footer";

export default {
  title: "Partials/Footer",
  Component: Footer,
  argsTypes: {

  }
}

function Template(args) {
  return (
    <div>
      <Footer {...args}/>
    </div>
  );
}

export const Primary = Template.bind({});

Primary.args = {

}