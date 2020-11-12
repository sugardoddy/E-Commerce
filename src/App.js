import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
const hatsPage = (props) => {
  console.log(props);
  return(
    <h1> TOPI PAGE </h1>
  );
  
  }

  const jaketPage = (props) => {
    console.log(props);
    return(
      <h1> JAKET PAGE </h1>
    );
    
    }

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/shop' component={ ShopPage } />
    </Switch>
      
    </div>
  );
}

export default App;
