import Header from './Header'
import Head from 'next/Head'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Head>
            <title>
                La Sauce Numérique
            </title>
        </Head>
        <Header />
        {props.children}
    </div>
);

export default Layout;
