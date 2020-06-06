import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
