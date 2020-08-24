import React, { Fragment } from 'react';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/BackDrop/BackDrop';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <h2>LoGO</h2>
        </div>
        <nav>
          <div className={classes.NavigationItems}>
            <a className={classes.NavigationItem}>
              <i className="home icon"></i>
    HOME
  </a>
            <a className={classes.NavigationItem}>
              <i className="th list icon"></i>
    PRODUCTS
  </a>

            <a className={classes.NavigationItem}>
              <i className="question circle icon"></i>
    ABOUT
  </a>
          </div>      </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;