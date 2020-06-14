import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
import Shop from "./pages/ShopPage/Shop"
import Header from './components/header/Header';
function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
