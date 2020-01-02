// eslint-disable-next-line import/no-unresolved
import Head from 'next/head';
import Header from './Header';
import PageFooter from './PageFooter';


const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Head>
      <title>La Sauce Numérique</title>
    </Head>
    <Header />
    {children}    
    <PageFooter />
  </div>

);

export default Layout;
