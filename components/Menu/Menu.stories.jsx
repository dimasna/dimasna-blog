import React from 'react';
import Menu from './index.jsx';
import MenuItem from '../MenuItem';
import * as MenuItemStories from '../MenuItem/MenuItem.stories';
export default {
  title: 'Components/Menu',
  component: Menu
};

const Template = (args) => <Menu {...args}/>;


export const LargeScreen = Template.bind({});
LargeScreen.args = {
  children: [
    <MenuItem {...MenuItemStories.Default.args} title='MenuItem 1'/>,
    <MenuItem {...MenuItemStories.Default.args} title='MenuItem 2'/>
  ],
};

export const SmallScreen = Template.bind({});
SmallScreen.args = {
  children: [
    <MenuItem {...MenuItemStories.Default.args} title='MenuItem 1'/>,
    <MenuItem {...MenuItemStories.Default.args} title='MenuItem 2'/>
  ],
};
SmallScreen.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
};

