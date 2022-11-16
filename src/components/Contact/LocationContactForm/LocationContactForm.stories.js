import React from 'react';

import LocationContactForm  from './LocationContactForm';
export default {
  title: 'Contact/Forms/Location Contact Form',
  component: LocationContactForm,

};

const Template = (args) => <LocationContactForm {...args} />;


export const Default = Template.bind({});
Default.args = {
  props: {
    address:{
      text:"Comsats Univercity Lahore",
      class:""
    },
    map:{
      url:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.413809808077!2d74.21044541462787!3d31.402723060084984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffd0bc7c5f71%3A0x879e9b82857bcd94!2sCOMSATS%20University%20Lahore!5e0!3m2!1sen!2s!4v1668300594394!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
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
    footer:{
      text:"We will get back to you very soon",
      class:""
    }
},
  
};
