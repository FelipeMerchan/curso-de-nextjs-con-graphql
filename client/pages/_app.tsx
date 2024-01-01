import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import client from '../service/client'
import 'semantic-ui-css/semantic.min.css'
import '../globals.css'

import CartProvider from '@store/Cart'
import AuthProvider from '@store/Auth'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp
