import React from "react";
import Card from "./SimpleProductCard";

export default {
  title: "Card/Product Cards/Simple Product Card",
  component: Card,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => {
  return <Card {...args}></Card>;
};

export const SimpleProductCard = Template.bind({});

SimpleProductCard.args = {
  props: {
    img:{
        url:"https://media.wired.com/photos/618c00da12143eb34d938e26/3:2/w_2400,h_1600,c_limit/Gear-Beats-Fit-Pro-top.jpg",
        class:"",
    },
    catagory:{
        text:"Electronic",
        class:"",
    },
    title:{
        text:"Bloody Ear Pods",
        class:""
    },
   
    description:{
        text:"30G 8D audio blutooth chargeable Finishing",
        class:""
    }
    }
    
  
}
