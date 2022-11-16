import React from "react";
import BlogCardViewer from "./BlogCardViewer";
import BlogImageCard from "../BlogImageCard/BlogImageCard";
import BlogContainedCard from "../BlogContainedCard/BlogContainedCard";
import BlogDetailCard from "../BlogDetailCard/BlogDetailCard";

import { SimpleImageCard } from "../BlogImageCard/BlogImageCard.stories";
import {SimpleDetailedCard} from '../BlogDetailCard/BlogDetailCard.stories'

export default {
  title: "Card/List",
  component: BlogCardViewer,
};

const Template = ({ items, ...args }) => (
  <BlogCardViewer>
    {items.map((item) => {
      console.log(item);
      return <BlogImageCard {...item} />;
    })}
  </BlogCardViewer>
);

export const Empty = Template.bind({});
Empty.args = { items: [] };
export const OneBlogImageCard = Template.bind({});
OneBlogImageCard.args = {
    items:[
        {
            ...SimpleImageCard.args
        }
    ]
}

export const MoreBlogImageCard = Template.bind({});
MoreBlogImageCard.args = {
  items: [
    {
      ...SimpleImageCard.args,
    },
    {
        ...SimpleImageCard.args,
      },
      {
        ...SimpleImageCard.args,
      },
      {
        ...SimpleImageCard.args,
      },
      {
        ...SimpleImageCard.args,
      },
      {
        ...SimpleImageCard.args,
      },
  ],
};



const Template2 = ({ items, ...args }) => (
    <BlogCardViewer>
      {items.map((item) => {
        console.log(item);
        return <BlogContainedCard {...item} />;
      })}
    </BlogCardViewer>
  );

  export const OneBlogContainedCard = Template2.bind({});
  OneBlogContainedCard.args = {
      items:[
          {
              ...SimpleImageCard.args
          }
      ]
  }
  
  export const MoreBlogContainedCard = Template2.bind({});
  MoreBlogContainedCard.args = {
    items: [
      {
        ...SimpleImageCard.args,
      },
      {
          ...SimpleImageCard.args,
        },
        {
          ...SimpleImageCard.args,
        },{
            ...SimpleImageCard.args,
          },{
            ...SimpleImageCard.args,
          },
        
    ],
  };
  

  const Template3 = ({ items, ...args }) => (
    <BlogCardViewer>
      {items.map((item) => {
        console.log(item);
        return <BlogDetailCard {...item} />;
      })}
    </BlogCardViewer>
  );

  export const OneBlogDetailedCard = Template3.bind({});
  OneBlogDetailedCard.args = {
      items:[
          {
              ...SimpleDetailedCard.args
          }
      ]
  }
  
  export const MoreBlogDetailedCard = Template3.bind({});
  MoreBlogDetailedCard.args = {
    items: [
      {
        ...SimpleDetailedCard.args,
      },
      {
          ...SimpleDetailedCard.args,
        },
        {
          ...SimpleDetailedCard.args,
        },{
            ...SimpleDetailedCard.args,
          },{
            ...SimpleDetailedCard.args,
          },
        
    ],
  };