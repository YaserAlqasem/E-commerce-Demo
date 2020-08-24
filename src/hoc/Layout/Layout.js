import React, { Component, Fragment } from 'react';

import Navbar from '../../components/Navigation/NavBar/NavBar';
import Sidedrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
            </Fragment>
        )
    }
}

export default Layout;