import React from 'react';

import Radio from '../components/Radio/Radio';
export default {
  title: 'Form/Radio',
  component: Radio,
};

const Template = (args) => <Radio {...args} />;
export const Default = Template.bind({});

Default.args = {
    props: {
        label:{
            text:"Default Radio-Button",
            class:"",
        },
        input:{
            name:"Default-radio",
            class:"",         
        }
    }
}