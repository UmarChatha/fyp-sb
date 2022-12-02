import React from "react";
import SearchInput from "../components/SearchInput/SearchInput";

export default {
  title: "Form/SearchInput",
  component: SearchInput,
};

const Template = (args) => <SearchInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    props: {
        label:{
            text:"Search",
            class:"",
        },
        input:{
            placeholder:"Search Mockups, Logos...",
            class:"",         
        },
        button:{
            text:"Select",
            class:"",         
        }
    }
}