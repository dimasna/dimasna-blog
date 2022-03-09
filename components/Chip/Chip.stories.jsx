import React from 'react';
import Chip from '.';

export default {
  title: 'Components/Chip',
  component: Chip,
};

const Template = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Career'
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  iconName: "github",
  text: 'Career'
};

