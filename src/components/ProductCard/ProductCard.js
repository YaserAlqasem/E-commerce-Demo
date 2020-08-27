import React from 'react';
import classes from './ProductCard.module.css';

const ProductCard = (props) => (
    
    <div key={props.key} className={classes.product}>
        <div className={classes.slider_image}>
            <img src={props.product.image} alt="" />
        </div>
        <div className={classes.product_info}>
            <div>
                <strong><a href="">Produt one</a></strong>
            </div>
            <strong><span>$149.00</span></strong>
            <div>
                <a href="" role="button" title="Add To Wish List"><i className="fa fa-heart-o" style={{ fontSize: 20 }}></i></a>

                <button type='submit'><span>ADD TO CART</span></button>
            </div>
        </div>
    </div>

);

export default ProductCard;