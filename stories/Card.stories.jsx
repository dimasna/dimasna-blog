import React from 'react';
import Card from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--dcq3duqU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zbkjdro8kbqow4318lcq.png',
  title: 'Frontend Engineer at BRI',
  category: 'Career',
  stack: ['React','GraphQL'],
  date: '29 Nov 2021'
};

