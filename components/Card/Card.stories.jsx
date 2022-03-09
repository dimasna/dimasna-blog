import React from 'react';
import Card from '.';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  post: {
    category: {
      name: "Blog Post",
      slug: "blogpost"
    },
    slug: "my-first-post",
    technologies: [],
    title: "My First Post - Why I Decided to Start Writing on Blog ?",
    description: "this is my first post on this blog, this post will cover the reasons why I decided to write my journey as a software engineer and what purpose of this blog.",
    createdAt: "2021-12-27T02:42:09.574971+00:00",
    featuredImage: {
      url: "https://media.graphcms.com/T4D3pPlKR2Nq3SUxuPzQ"
    },
  }
};



