// eslint-disable-next-line import/no-unresolved
import Head from 'next/Head';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Head>
      <meta charset="utf-8" />
      <title>La Sauce Numérique</title>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <Header />
    {children}
  </div>
);

export default Layout;
