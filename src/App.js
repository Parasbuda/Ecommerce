import React, { Component } from 'react';
import './App.css';
import {Switch,Route,Redirect} from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
import Shop from "./pages/ShopPage/Shop"
import Header from './components/header/Header';
import SignInSignUp from "./pages/SignIn-SignUp/SignInSignUp"
import {auth} from "./Firebase/Firebase"
import {createUserProfileDocument} from "./Firebase/Firebase"
import {connect} from "react-redux"
import {setCurrentUser} from "./Redux/user/user.actions"
class App extends Component{

  state={
    currentUser:null
  }



  unsubscribeFromAuth=null
  componentDidMount(){

    const{setCurrentUser}=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot=>{
              setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            
          })
         
        })
       
      }
      else{
       setCurrentUser(userAuth)
      }
   
    })
  
  } 

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/signin" render={()=>this.props.currentUser?
        (<Redirect to="/"/>):(
          <SignInSignUp/>
        )}></Route>
      </Switch>
    </div>
  );
}
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser 
})
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
