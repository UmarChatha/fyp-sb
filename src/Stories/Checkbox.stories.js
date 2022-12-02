import React from "react";

import Checkbox from "../components/Checkbox/Checkbox";
export default {
  title: "Form/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;
export const Default = Template.bind({});

Default.args = {
    props: {
        label:{
            text:"Default checkbox",
            class:"",
        },
        input:{
            class:"",         
        }
    }
}
