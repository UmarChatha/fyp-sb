import React from "react";
import Card from "./DetailedProductCard";

export default {
  title: "Card/Product Cards/Simple Product Card",
  component: Card,
};

const Template = (args) => {
  return <Card {...args}></Card>;
};

export const DetailedProductCard = Template.bind({});

DetailedProductCard.args = {
  props: {
    img:{
        url:"https://media.wired.com/photos/618c00da12143eb34d938e26/3:2/w_2400,h_1600,c_limit/Gear-Beats-Fit-Pro-top.jpg",
        class:"",
      },
      brand:{
        text:"Bloody",
        class:"",
      },
      title:{
        text:"Bloody Ear Pods",
        class:"",
      },
      ratings:{
        text:"4",
        class:""
      },
      price:{
        text:"44$",
        class:"",
      },
      button:{
        text:"Buy",
        class:"",
      },
      catagories:{
        text:"",
        list:[],
      },
      description:{
        text:"Lorem  Ipsum Lorem ipsum dolor sit amet, consectetur adipis Ipsum Lorem ipsum dolor sit amet, consectetur adip Lorem Lorem"
      },
      colors:["red, white","black"]
    }
    
  
}
