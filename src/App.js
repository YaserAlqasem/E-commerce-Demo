import React from 'react';
import classes from './App.module.css';
import Layout from './hoc/Layout/Layout';

import NivoSlider from '../src/components/NivoSlider/NivoSlider'
import ProductsSetion from '../src/components/ProductsSection/ProductsSlider'
import { Route, Switch, Redirect } from 'react-router-dom';


const homePage = 
 ( <div className={classes.content}>
        <NivoSlider />
        <ProductsSetion/>
      </div>);

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact render={() => homePage} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Layout>
      {routes}
    </Layout>
  );
}

export default App;
