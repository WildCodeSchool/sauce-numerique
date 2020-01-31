import React, { Component } from 'react';
import Navbar from './Navbar';
import GlobalStyles from './Global';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarOpen: false
        };

        this.handleNavbar = () => {
            this.setState({ navbarOpen: !this.state.navbarOpen });
        }
    };

        render() {

            return (
                <>
                    <Navbar
                        navbarState={this.state.navbarOpen}
                        handleNavbar={this.handleNavbar}
                        isHome={this.props.isHome}
                    />
                    <GlobalStyles />
                </>
            );
        };
    };

export default Menu;