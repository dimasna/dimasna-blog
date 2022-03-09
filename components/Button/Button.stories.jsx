import React from 'react';
import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['large', 'normal','small'],
      control: { type: 'select' }
    }}
  
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary'
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary'
};
export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  variant: 'danger'
};
export const Flat = Template.bind({});
Flat.args = {
  children: 'Flat',
  variant: 'flat',

};
export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  variant: 'outline',

};


