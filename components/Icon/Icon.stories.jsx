import React from 'react';
import Icon from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "github",
  width: 14,
  heigth: 14
};

