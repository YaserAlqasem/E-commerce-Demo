import React, { Component, Fragment } from 'react';
import classes from './Layout.module.css';

import Navbar from '../../components/Navigation/NavBar/NavBar';
import Sidedrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Shoppingcartbox from '../../components/ShoppingCart/ShoppingCartBox';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        showShoppingCart: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    shoppingCartClosedHandler = () => {
        this.setState({ showShoppingCart: false });
    }

    shoppingCartToggleHandler = () => {
        this.setState((prevState) => {
            return { showShoppingCart: !prevState.showShoppingCart };
        });
    }

    render() {
        return (
            <Fragment>
                <Navbar drawerToggleClicked={this.sideDrawerToggleHandler}
                cartToggleClicked={this.shoppingCartToggleHandler} />

                <Sidedrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />

                <Shoppingcartbox
                    open={this.state.showShoppingCart}
                    closed={this.shoppingCartClosedHandler} />

                    <main className={classes.Content}>
                    {this.props.children}
                </main> 

                <Footer />
            </Fragment>
        )
    }
}

export default Layout;