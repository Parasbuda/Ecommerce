 import React from "react"
 import "./SignInSignUp.scss"
import SignIn from "../../components/SignIn/SignIn"
import SignUp from "../../components/Sign-Up/SignUp"

 const SignInSignUp=()=>{
     return(
         <div className="sign-in-and-sign-up">
             <SignIn/>
             <SignUp/>
         </div>
     )
 }
 export default SignInSignUp