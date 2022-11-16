import React from "react";
import Card from "./BlogImageCard";

export default {
  title: "Card/Blog Cards/Image Card",
  component: Card,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => {
  return <Card {...args}></Card>;
};

export const SimpleImageCard = Template.bind({});

SimpleImageCard.args = {
  props: {
    title: {
      text: "not mention",
      class: "",
    },
    img: {
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      class: "",
    },
    body: {
      text: "Not Mention",
      class: "",
    },
    header: {
      text: "Not Mention",
      class: "",
    },
    button: {
      text: "not given",
      class: "",
    },
    views: {
      text: "0.0",
      class: "",
    },
  },
};
