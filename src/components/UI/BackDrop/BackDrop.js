import React from 'react';

import classes from './BackDrop.module.css';

const backdrop = (props) => (
    props.backdropfor == "shoppingcart" ?
        props.show ? <div className={classes.shoppingcartbackdrop} onClick={props.clicked}></div> : null
        : props.show ? <div className={classes.backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;