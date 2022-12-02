import React from "react";

import IconButton from "../components/IconButton/IconButton";
export default {
  title: "Form/IconButton",
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;
export const Default = Template.bind({});

Default.args = {
    props: {
        button: {
            text: "Buy Now",
            class: "",
          },
    }
}
