import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default withRouter(App);
