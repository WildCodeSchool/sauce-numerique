// eslint-disable-next-line import/no-unresolved
import Head from 'next/Head';
import Menu from './Navbar/Menu';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Head>
      <title>La Sauce Numérique</title>
      <meta charset="UTF-8" />
    </Head>
    <Menu />
    {children}
  </div>
);

export default Layout;
