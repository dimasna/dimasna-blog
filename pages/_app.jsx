import 'tailwindcss/tailwind.css'
import '../styles.css'
import {
  ApolloProvider
} from "@apollo/client";
import client from '../apolloClient'
export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}