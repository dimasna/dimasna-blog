import React from 'react';
import Text from '../components/Text';

export default {
  title: 'Components/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Lorem Ipsum'
};
export const Title = Template.bind({});
Title.args = {
  value: 'Lorem Ipsum',
  type: 'title'
};
export const Date = Template.bind({});
Date.args = {
  value: '29 Nov 2021',
  type: 'date'
};

