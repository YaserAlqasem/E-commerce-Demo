import React, { Component, Fragment } from 'react';
import classes from './Layout.module.css';

import Navbar from '../../components/Navigation/NavBar/NavBar';
import Sidedrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    render() {
        return (
            <Fragment>
                <Navbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <Sidedrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                    
                    <main className={classes.Content}>
                    {this.props.children}
                </main> 
                <Footer />
            </Fragment>
        )
    }
}

export default Layout;