import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../redux/lib/with-redux-store'
import { Provider } from 'react-redux'
import Head from 'next/head'
import Styles from './styles'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props
    console.log(reduxStore)
    return (
      <div>
        <Head>
          <title>d2x medizerva</title>
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" crossorigin="anonymous" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
        <Styles/>
      </div>
    )
  }
}

export default withReduxStore(MyApp)