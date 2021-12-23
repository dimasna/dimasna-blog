import { useState } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Bio from '../components/Bio';
import TitleContentBar from '../components/TitleContentBar';
import CardContainer from '../components/CardContainer';
import PostModal from '../components/PostModal';
import { GET_ALL_POSTS } from '../graphQL/Query';
import client from '../apolloClient';

export default function Home({ posts }) {
  const [showPostModal, setShowPostModal] = useState(false)
  const updateShow = () => {


    setShowPostModal(!showPostModal);

  }

  return (
    <Layout>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <div className="flex h-32 bg-gradient-to-b from-gray-100"></div>
      <section className="lg:px-44 md:px-12 xxs:px-2 -mt-8 xxs:-mt-16">
        <div className="flex items-baseline xxs:items-start xs:items-end xxs:px-0.5 mt-6">
          <p className="text-8xl">👨‍💻</p>
          <p className="text-4xl font-bold leading-none">Hi, I'm Dimas N Al </p>
        </div>
        <Bio text="I’m fullstack javascript developer expertise in NodeJS/React also experienced in NextJS, GraphQL, Restful API, Python (Flask),
          PHP (Laravel), Java, C++ (Arduino) and deploy it to cloud platform such as AWS, GCP and Azure (Serverless). Beside code,
          I also hands on UI/UX design. In my spare time I usually watch movie/anime."/>
        <TitleContentBar />
        <PostModal isShow={showPostModal} setShow={setShowPostModal} />
        <CardContainer posts={posts} updateShow={updateShow}/>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_POSTS }) || [];
  return { 
    props: { posts: data.postsConnection.edges }
  }
}