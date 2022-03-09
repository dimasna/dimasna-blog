import React from 'react';
import PostModal from '.';
import { useArgs } from '@storybook/client-api';
import { GET_POST_DETAILS } from '../../graphQL/Query';
import { MockedProvider } from '@apollo/client/testing';
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

  let mocks = [
    {
      request: {
        query: GET_POST_DETAILS,
        variables: {
          slug: "test-post" 
        }
      },
      result: {
        data: {
          post: {
            category: {
              name: 'Blog Post',
              slug: 'blogpost'
            },
            slug: "test-post",
            technologies: {
              name: '-',
              slug: '-'
            },
            title: 'Test Post',
            description: '-',
            createdAt: '2021-12-27T02:42:09.574971+00:00',
            featuredImage: {
              url: 'https://media.graphcms.com/T4D3pPlKR2Nq3SUxuPzQ'
            },
            content: "**Hello, world!** Welcome to my Blog-folio (blog-portfolio), this blog will be my journey note as a software engineer.  I'll share my experience when I join competitions, sharing knowledge, and projects that I build.<br/>\n<br/>\n**Why did I decide to Start Writing?** <br/>\n⁠1. To improve my English writing.<br/>\n⁠2. Sharing is Caring.<br/>\n⁠3. Create a log of my journey as a Software Engineer.\n<br/>\nThat's all about my first post, Hope you guys enjoy my other posts soon! stay tuned."
          }
        },
      },
    },
  ]
  return (
    <MockedProvider mocks={mocks}>
      <PostModal {...args} setShow={handle} />
    </MockedProvider>
  )
};;

export const Default = Template.bind({});
Default.args = {
  isShow: true,
  slug: "test-post",
  setShow: () => { }
};


