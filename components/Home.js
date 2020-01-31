/* import { withRouter } from 'next/router';
import React from 'react';
import { Router } from 'express';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true, 
    }
  }
  render () {
    const Home = ({ router }) => {
      const path = router.pathname;
      urlcheck = () => {
        const URL = path === '/' ? true : false);
        this.setState({isHome})
        return (
          <div>
              <h1>
                  <p>OUI</p>
              </h1>
          </div>
    )
  }
    return (
      <div>
          <Home />
      </div>
    )
  }
}


export default withRouter(Home);
/*
const Home = ({ router }) => {
    const path = router.pathname;
    const isHome = () => (path === '/' ? true : false);
      return (
        <div>
            <h1>
                {isHome() && <p>OUI</p>}
            </h1>
        </div>
  )
}




class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: false,
    }
    const { router } = this.props;
    console.log(router);
  }

  componentDidMount = () => {
    if ( this.props.router.pathname === '/') {
      this.setState({ isHome: true })
      console.log(this.state.isHome)
    } else {
      this.setState({ isHome: false })
      console.log(this.state.isHome)
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
        <Menu isHome={this.state.isHome} />
        { children }
       <ContactUs />
     </div>

   );
 }
}

export default withRouter(Layout);
/*/