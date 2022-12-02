import React from "react";
import TextArea from "../components/TextArea/TextArea";

export default {
  title: "Form/TextArea",
  component: TextArea,
};

const Template = (args) => <TextArea {...args} />;
export const Default = Template.bind({});

Default.args = {
  props: {
    label:{
      text:"Your Message",
      class:"",
  },
  textarea:{
      rows:"4",
      placeholder:"Write your thoughts here...",
      class:"",         
  }
  }
}