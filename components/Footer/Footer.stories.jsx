import React from 'react';

import Footer from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Lorem Ipsum Footer'
};
