import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={classes.mobilenav}>
        <div className={classes.drawertoggle} onClick={props.drawertoggleClicked}>
            &#9776;
    </div>
        <div className={classes.shoppingcart}>
            <span onClick={props.carttoggleClicked} className={classes.shoppingcartboxtoogle}><i className="fa fa-shopping-cart"></i><span className={classes.badge}>3</span></span>
        </div>
    </div>
);

export default drawerToggle;