import { useState } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import Bio from '../components/Bio'
import TitleContentBar from '../components/TitleContentBar'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import PostModal from '../components/PostModal'

export default function Home() {
  const [showPostModal, setShowPostModal] = useState(false)
  const updateShow = ()=>{
   
      
    setShowPostModal(!showPostModal);
    console.log('s'+showPostModal)
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
        <PostModal isShow={showPostModal} setShow={setShowPostModal}/>
        <CardContainer col="3">
          <Card category="Career" action={updateShow} date="29-11-2021" title="Front End Engineer" stack={['Vue', 'Vuex']} imgUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--dcq3duqU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zbkjdro8kbqow4318lcq.png" />
          <Card category="Career" action={updateShow} date="29-11-2021" title="Front End Engineer" stack={['Vue', 'Vuex']} imgUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--dcq3duqU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zbkjdro8kbqow4318lcq.png" />
          <Card category="Career" action={updateShow} date="29-11-2021" title="Front End Engineer" stack={['Vue', 'Vuex']} imgUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--dcq3duqU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zbkjdro8kbqow4318lcq.png" />
        </CardContainer>
      </section>
    </Layout>
  )
}
