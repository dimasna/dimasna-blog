import { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Bio from '../components/Bio';
import TitleContentBar from '../components/TitleContentBar';
import CardContainer from '../components/CardContainer';
import PostModal from '../components/PostModal';
import { GET_ALL_POSTS } from '../graphQL/query';
import client from '../apolloClient';
import usePagination from '../hooks/usePagination';
import Loading from '../components/Loading';
import HeadSEO from '../components/HeadSEO';

export default function Home({ postlists }) {
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectTitle, setSelectTitle] = useState('Show All');
  const [sortedBy, setSortedBy] = useState('Latest');
  const options = ["Show All", "Career", "Project", "Achievement", "Community", "Blog Post"];
  const { next, currentPage, currentData, maxPage } = usePagination(
    postlists,
    selectTitle,
    sortedBy,
    4
  );
  const [slug, setSlug] = useState('');


  const updateShow = () => {
    console.log('url' + slug);
    setShowPostModal(!showPostModal);
  }

  const currentPosts = currentData();
  const [element, setElement] = useState(null);

  const observer = useRef(null);
  const prevY = useRef(0);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;
        console.log(prevY.current)
        console.log(y)
        if (prevY.current > y || prevY.current == 0 && currentPage != maxPage) {
          next();
        }
        prevY.current = y;
      },
      { threshold: 1 }
    );
  }, []);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <Layout>
      <HeadSEO/>
      <div className="flex h-32 dark:hidden bg-gradient-to-b from-gray-100"></div>
      <section className="lg:px-44 md:px-12 xxs:px-2 -mt-8 xxs:-mt-16 dark:bg-darkbg dark:pt-32 max-w-[114em] m-auto">
        <div className="flex items-baseline xxs:items-start xs:items-end xxs:px-0.5 mt-6">
          <p className="text-8xl">👨‍💻</p>
          <p className="text-4xl font-bold leading-none dark:text-white">Hi, I'm Dimas N Al </p>
        </div>
        <Bio text="I’m fullstack javascript developer expertise in NodeJS/React also experienced in NextJS, GraphQL, Restful API, Python (Flask),
          PHP (Laravel), Java, C++ (Arduino) and deploy it to cloud platform such as AWS, GCP and Azure (Serverless). Beside code,
          I also hands on UI/UX design. I won some international and national Hackathon competition. In my spare time I usually watch movie/anime."/>
        <TitleContentBar options={options} selectTitle={selectTitle} setSelectTitle={setSelectTitle} sortedBy={sortedBy} setSortedBy={setSortedBy} />
        <PostModal isShow={showPostModal} setShow={setShowPostModal} slug={slug} />
        <CardContainer posts={currentPosts} updateShow={updateShow} setSlug={setSlug} />
        {currentPage !== maxPage && <div className="text-center" ref={setElement}><Loading /></div>}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_POSTS }) || [];
  return {
    props: { postlists: data.postsConnection.edges }
  }
}



