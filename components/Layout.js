// eslint-disable-next-line import/no-unresolved
import Head from 'next/head';
import Menu from './Navbar/Menu';
import ContactUs from './ContactUs';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>La Sauce Numérique</title>
      <meta charSet="UTF-8" />
      <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <link rel="stylesheet" href="./component/Carousel/styles.css" type="text/css" />
      <script type="text/javascript" src="../commons/js/jquery-2.2.1.min.js" />
    </Head>
    <Menu />
    {children}
    <ContactUs />
    {/* <PageFooter /> */}
  </div>

);

export default Layout;
