import React, {useState} from 'react';
import Select from '.';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Components/Select',
  component: Select,
};

const Template = (args) => {
  
  const [_, updateArgs] = useArgs();
  const handle = (e, f) => {
    // inside this function I am updating arguments, but you can call it anywhere according to your demand, the key solution here is using `useArgs()`
    // As you see I am updating list of options with new state here
        // console.log(e, f);
        updateArgs({ ...args, value: e });
      };
  return (
    <Select {...args} setValue={handle} />
  )
};

export const Default = Template.bind({});
Default.args = {
  options: ["Opt 1", "Opt 2", "Opt 3"],
  value: "Opt 1",
  setValue: ()=>{}
};

