// eslint-disable-next-line import/no-unresolved
import Head from 'next/head';
import Menu from './Navbar/Menu';
import ContactUs from './ContactUs';
import { withRouter } from 'next/router';
import React, { Component } from 'react';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ishome: false,
    }
    const { router } = this.props;
  }

  componentDidMount = () => {
    if (this.props.router.pathname === '/') {
      this.setState({ ishome: true })
    }
  };

  render() {
    return (
      <div>
        <Head>
          <title>La Sauce Numérique</title>
          <meta charSet="UTF-8" />
          <link href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="stylesheet" href="./component/Carousel/styles.css" type="text/css" />
          <script type="text/javascript" src="../commons/js/jquery-2.2.1.min.js" />
        </Head>
        <Menu ishome={this.state.ishome} />
        {this.props.children}
        <ContactUs />
      </div>

    );
  }
}

export default withRouter(Layout);