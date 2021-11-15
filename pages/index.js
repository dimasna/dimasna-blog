import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <div className="flex h-32 bg-gradient-to-b from-gray-100"></div>
      <section className="lg:px-44 md:px-12 -mt-8">
        <div className="flex items-baseline">
        <p className="text-8xl">👨‍💻</p>
        <p className="text-4xl font-bold">Hi, I'm Dimas N Al<span >👋</span> </p>
        </div>
      </section>
    </Layout>
  )
}
