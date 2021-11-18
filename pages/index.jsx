import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import About from '../components/About'
import TitleContentBar from '../components/TitleContentBar'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <div className="flex h-32 bg-gradient-to-b from-gray-100"></div>
      <section className="lg:px-44 md:px-12 xxs:px-2 -mt-8 xxs:-mt-16">
        <div className="flex items-baseline xxs:items-start xs:items-end xxs:px-0.5">
          <p className="text-8xl">👨‍💻</p>
          <p className="text-4xl font-bold leading-none">Hi, I'm Dimas N Al<span >👋</span> </p>
        </div>
        <About>
          I’m fullstack javascript developer especially in NodeJS/React, but also experienced in Vue, NextJS, SailsJS, Python (Flask),
          PHP (Laravel), Java, C++ (Arduino) and deploy it to cloud platform such as AWS, GCP and Azure (Serverless). Beside code,
          I also hands on UI/UX design. In my spare time I usually watch movie/anime.
        </About>
        <TitleContentBar/>
      </section>
    </Layout>
  )
}
