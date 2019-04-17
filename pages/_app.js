import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'
import Styles from './styles'
//-----------------REDUX--------------------------------
import withReduxStore from '../redux/lib/with-redux-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../redux/reducers'
import { createStore, applyMiddleware } from 'redux'
//import '../static/css/bootstrap.min.css' 
export const store = createStore(rootReducer, applyMiddleware(logger, thunk))


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
      <div className=''>
        <Head>
          <title>d2x medizerva</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Prompt" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Sarabun" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Sarabun" rel="stylesheet"></link>
          <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"></link>

          <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <Container>
          <Provider store={store}>
            <React.Fragment>
              <Component {...pageProps} />
            </React.Fragment>
          </Provider>
        </Container>
        <Styles />
      </div>
    )
  }
}

export default withReduxStore(MyApp)