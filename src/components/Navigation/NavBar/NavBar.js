import React from 'react';

import classes from './NavBar.module.css';

const navbar = () => {
    return (
        <header>
            <nav>
                <div className="ui secondary pointing menu">
                    <div className={classes.Logo}>

                    </div>
                    <span className="item">
                        <h2>LoGO</h2>
                    </span>
                    <a className="item active" href="/home">
                        HOME
  </a>
                    <a className="item" href="/products">
                        PRODUTS
  </a>
                    <a className="item" href="/about">
                        ABOUT
  </a>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..." />
                                <i className="search link icon"></i>
                            </div>
                        </div>
                    </div>
                </div></nav></header>

    )
};

export default navbar;