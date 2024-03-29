import Head from "next/head"
import { useRouter } from "next/router";


export const publicUrl = 'https://dimasna.com';
const defaultTitle = 'Dimas NA | Software Engineer Blogfolio';
const defaultDescription =
    'Welcome to my blogfolio, I write about my journey, career and achievements being a Software Engineer';
const defaultOgImage =
    'https://dimasna.com/logo.png';


const HeadSEO = ({
    title = defaultTitle,
    description = defaultDescription,
    image = defaultOgImage,
    publishDate = '',
    children
}) => {
    const router = useRouter();
    const url = `${publicUrl}${router.asPath}`;
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Facebook OG meta tags */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Meta Tags  */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:site" content={url} />
            <meta property="twitter:creator" content="@dimasnal" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <meta property="twitter:url" content={url} />

            {publishDate ? (
                <>
                    <meta name="twitter:label1" content="Published on" />
                    <meta name="twitter:data1" content={publishDate} />
                </>
            ) : null}

            {children}
        </Head>
    )
}

export default HeadSEO
