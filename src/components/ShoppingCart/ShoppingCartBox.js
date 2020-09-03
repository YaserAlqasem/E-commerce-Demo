import React, { Fragment } from 'react';
import Backdrop from '../UI/BackDrop/BackDrop';
import classes from './ShoppingCartBox.module.css';
import sliderimage1 from '../../assets/pic4.png';

const shoppingcart = (props) => {

    let attachedClasses = [classes.shopping_cart, classes.close];
    if (props.open) {
        attachedClasses = [classes.shopping_cart, classes.open];
    }

    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} backdropfor="shoppingcart" />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.shopping_cart_header}>
                    <i className="fa fa-shopping-cart cart-icon"></i><span className={classes.badge}>3</span>
                    <div className={classes.shopping_cart_total}>
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">$447.00</span>
                    </div>
                </div>

                <ul className={classes.shopping_cart_items}>
                    <li className={classes.clearfix}>
                        <img src={sliderimage1} alt="" style={{ width: '40%' }} />
                        <span className={classes.item_name}>Product one</span>
                        <span className={classes.item_price}>$149.00</span>
                        <span className={classes.item_quantity}>Quantity: 1</span>
                    </li>

                    <li className={classes.clearfix}>
                        <img src={sliderimage1} alt="" style={{ width: '40%' }} />
                        <span className={classes.item_name}>Product one</span>
                        <span className={classes.item_price}>$149.00</span>
                        <span className={classes.item_quantity}>Quantity: 1</span>
                    </li>

                    <li className={classes.clearfix}>
                        <img src={sliderimage1} alt="" style={{ width: '40%' }} />
                        <span className={classes.item_name}>Product one</span>
                        <span className={classes.item_price}>$149.00</span>
                        <span className={classes.item_quantity}>Quantity: 1</span>
                    </li>
                </ul>

                <span className={classes.viewcart}>View Cart</span>
            </div>
        </Fragment>
    )
};

export default shoppingcart;