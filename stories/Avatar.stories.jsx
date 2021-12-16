import React from 'react';
import Avatar from '../components/Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
export const Normal = Template.bind({});
Normal.args = {
  size: 'normal'
};
export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

