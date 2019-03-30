import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from "react"

const Layout = (props) => {
  useEffect(() => {
    require('../static//vendor/jquery/jquery-3.3.1.slim.min.js')
    const script = document.createElement('script');
    script.src = `/static/vendor/jquery/jquery-3.3.1.slim.min.js`;
    script.async = false;
    document.body.appendChild(script);
    // const files

    setTimeout(() => {
      const s1 = document.createElement('script')
      s1.src = `/static/vendor/jquery/popper.min.js`;
      s1.async = true;
      document.body.appendChild(s1);
    }, 500)

  });
  return (
    <div>
      <Head>
        <script src="/static/vendor/jquery/jquery-3.3.1.slim.min.js" rel="stylesheet" type="text/css" ></script>
        <script src="/static/vendor/jquery/popper.min.js" rel="stylesheet" type="text/css" ></script>
        <script src="/static/vendor/bootstrap/bootstrap.min.js" rel="stylesheet" type="text/css" ></script>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
export default Layout