import React from 'react';
import PostModal from '../components/PostModal';
import { useArgs } from '@storybook/client-api';
export default {
  title: 'Components/PostModal',
  component: PostModal,
};

const Template = (args) => {

  const [_, updateArgs] = useArgs();
  const handle = (e, f) => {
    // inside this function I am updating arguments, but you can call it anywhere according to your demand, the key solution here is using `useArgs()`
    // As you see I am updating list of options with new state here
    console.log(e, f);
    updateArgs({ ...args, isShow: e });
  };
  return (

    <PostModal {...args} setShow={handle}/>
  )
};;

export const Default = Template.bind({});
Default.args = {
  isShow: true,
  setShow: ()=>{}
};

