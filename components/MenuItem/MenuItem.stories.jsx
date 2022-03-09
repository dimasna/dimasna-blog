import React from 'react';
import MenuItem from '.';

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
};

const Template = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Github",
  icon: "github",
  link: "https://github.com"
};

