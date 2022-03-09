import React from 'react';

import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LargeScreen = Template.bind({});


export const SmallScreen = Template.bind({});
SmallScreen.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
};
