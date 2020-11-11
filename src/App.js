import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
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
      <Route exact path='/topi' component={ hatsPage } />
      <Route path='/topi/:topicsId' component={ hatsPage } />
      <Route path='/jaket' component={ jaketPage } />
    </Switch>
      
    </div>
  );
}

export default App;
