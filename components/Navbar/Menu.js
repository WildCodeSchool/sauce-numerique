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
            const { ishome } = this.props
            return (
                <>
                    <Navbar
                        navbarstate={this.state.navbarOpen ? "true" : "false"}
                        handleNavbar={this.handleNavbar}
                        ishome={ishome ? "true" : "false"}
                    />
                    <GlobalStyles />
                </>
            );
        };
    };

export default Menu;