import React from 'react';

import SimpleContactForm  from './SimpleContactForm';
export default {
  title: 'Contact/Forms/SimpleContactForm',
  component: SimpleContactForm,
};

const Template = (args) => <SimpleContactForm {...args} />;
export const SimpleContactUs = Template.bind({});
SimpleContactUs.args = {
  props: {
    body:{
        text:"Feel Free to Contact Us~~",
        class:""
      },
      address:{
        text:"Comsats Univercity Lahore",
        class:""
      },
      streetAddress:{
        text:"34 street a for",
        class:""
      },
      email:{
        text:"abdulman@gmail.com",
        class:""
      },
      phone:{
        text:"233-233-2-233"
      },
      feedback:{
        text:"Great University"
      },
      button:{
        text:"Submit",
        class:""
      },
},
  
};
