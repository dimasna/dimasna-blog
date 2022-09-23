import { useEffect } from 'react'
import client from '../../apolloClient'
import Content from '../../components/Content'
import remarkBreaks from 'remark-breaks'
import remarkHtml from 'remark-html'
import { GET_ALL_SLUG, GET_POST_DETAILS } from '../../graphQL/query'
import { useRemark } from 'react-remark'
import useHasMounted from '../../hooks/useHasMounted'
import Layout from '../../components/Layout'
import HeadSEO from '../../components/HeadSEO'


const Post = ({ post }) => {
    const hasMounted = useHasMounted();
    const [reactContent, setMarkdownSource] = useRemark({ remarkPlugins: [remarkBreaks, remarkHtml] });
    // console.log('slug'+JSON.stringify(post))
    const { title, featuredImage, description, createdAt} = post.post;

    useEffect(() => {

        setMarkdownSource(post.post.content);

    }, [])

    if (!hasMounted) return null;
    return (
    <Layout>
        <HeadSEO title={title} image={featuredImage.url} description={description} publishDate={createdAt}>
        <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": "${title}",
          "image": ["${featuredImage.url}"],
          "datePublished": "${createdAt}",
          "dateModified": "${createdAt}",
          "author": {
            "@type": "Person",
            "@id": "https://twitter.com/dimasnal",
            "name": "Dimas NA",
            "url": "https://twitter.com/dimasnal"
          },
          "publisher": {
              "@type": "Person",
              "@id": "https://twitter.com/dimasnal",
              "name": "Dimas NA",
              "url": "https://twitter.com/dimasnal"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dimasna.com/"
          }
        }`,
                }}
            />
        </HeadSEO>
       
        <div className="py-20 xl:px-80 lg:px-60 md:px-30 sm:px-20 xxs:px-4">
             <Content data={post} loading={false} error={false} reactContent={reactContent}/>
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