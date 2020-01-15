// eslint-disable-next-line import/no-unresolved
import Head from 'next/head';
import PageFooter from './PageFooter';
import Menu from './Navbar/Menu';

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>La Sauce Numérique</title>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <Menu />
    {children}
    <PageFooter />
  </div>

);

export default Layout;
