// eslint-disable-next-line import/no-unresolved
import Head from 'next/Head';
import Menu from './Navbar/Menu';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>La Sauce Numérique</title>
      <meta charset="UTF-8" />
    </Head>
    <Menu />
    {children}
  </div>
);

export default Layout;
