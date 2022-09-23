import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="icon" type="image/png" href="/favicon.ico" />
                    <meta name="robots" content="index, follow" />
                </Head>
                <body className="bg-white dark:bg-darkbg">
                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}

export default MyDocument