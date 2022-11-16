import React from "react";
import Card from "./BlogDetailCard";

export default {
  title: "Card/Blog Cards/Detailed Card",
  component: Card,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => {
  return <Card {...args}></Card>;
};

export const SimpleDetailedCard = Template.bind({});

SimpleDetailedCard.args = {
  props: {
    title:{
     text:"Developers ",
     class:""
    },
    user:{
        img:{
            url:"https://image.shutterstock.com/image-photo/young-handsome-man-possing-modeling-260nw-1306661410.jpg",
                class:""
        },
        name:{
            text:"Abdul Rehman",
            class:""
        },
        subtitle:{
            text:"Backend Developer",
            class:""
        }
    },
    body:{
     text:"lorem asdi adifun uiasdf uiasdfuinhas uidaunisd uiashdfiu iuadorem asdi adifun uiasdf uiasdfuinhas uidaunisd uiashdfiu iuadorem asdi adifun uiasdf uiasdfuinhas uidaunisd uiashdfiu iuad",
     class:""
    },
    header:{
     text:"Not Mention",
     class:""
    },
    button:{
     text:"Learn More",
     class:""
    },
    views:{
     text:"1.0K",
     class:""
    }
    }
    
  
}
