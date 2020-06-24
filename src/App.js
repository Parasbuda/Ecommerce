import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
import Shop from "./pages/ShopPage/Shop"
import Header from './components/header/Header';
import SignInSignUp from "./pages/SignIn-SignUp/SignInSignUp"
import {auth} from "./Firebase/Firebase"
class App extends Component{

  state={
    currentUser:null
  }



  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser:user
      })

      console.log(this.state.currentUser)
    })
  } 

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
  return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/signin" component={SignInSignUp}></Route>
      </Switch>
    </div>
  );
}
}

export default App;
