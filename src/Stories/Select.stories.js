import React from 'react';

import Select from '../components/Select/Select';
export default {
  title: 'Form/Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;
export const Default = Template.bind({});

Default.args = {
  props:{
    label:{
        text:"Select Country",
        class:"",
    },
    select:{
        class:"",      
        options:["Pakistan","india","germany"]   ,
        selected:"Choose an Country",
    }
  }
}