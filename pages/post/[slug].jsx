import { useEffect } from 'react'
import client from '../../apolloClient'
import Content from '../../components/Content'
import remarkBreaks from 'remark-breaks'
import remarkHtml from 'remark-html'
import { GET_ALL_SLUG, GET_POST_DETAILS } from '../../graphQL/Query'
import { useRemark } from 'react-remark'
import useHasMounted from '../../hooks/useHasMounted'
import Layout from '../../components/Layout'
import Head from 'next/head'


const Post = ({ post }) => {
    const hasMounted = useHasMounted();
    const [reactContent, setMarkdownSource] = useRemark({ remarkPlugins: [remarkBreaks, remarkHtml] });


    useEffect(() => {

        setMarkdownSource(post.post.content);

    }, [])

    if (!hasMounted) return null;
    return (
    <Layout>
        <Head>
        <title>
          {post.post.title}
        </title>
      </Head>
        <div className="py-20 xl:px-80 lg:px-60 md:px-30 sm:px-20 xxs:px-4">
            <Content data={post} loading={false} error={false} reactContent={reactContent} />
        </div>
    </Layout>
    )
}

export default Post;


export async function getStaticPaths() {
    const { data } = await client.query({ query: GET_ALL_SLUG });
    return {
        paths: data.posts.map((post) => ({
            params: { slug: post.slug },
        })),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { data } = await client.query({ query: GET_POST_DETAILS, variables: { slug: params.slug } }) || [];

    //const reactContent = await serialize(content)
    return {
        props: { post: data }
    }
}