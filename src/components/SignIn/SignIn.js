import React from "react"
import "./SignIn.scss"
import FormInput from "./../Form-Input/Form-Input"
import CustomButton from "./../custom-button/CustomButton"

import  {auth,signInWithGoogle} from"../../Firebase/Firebase"
class SignIn extends React.Component{
    state={
        email:"",
        password:""
    }

    handleSubmit= async e=>{
        e.preventDefault()
        const {email,password}=this.state
        try{
            auth.signInWithEmailAndPassword(email,password)
            this.setState({
                email:"",
                password:''
            })
        }catch(error){
            console.log(error)
        }
       
    }

    handleChange=(e)=>{
        const {value,name}=e.target 

        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have  an account</h2>
                <span>Sign in with your email and password  </span>
                <form onSubmit={this.handleSubmit}>
                   
                    <FormInput type="email" name="email"
                     required value={this.state.email}
                     handleChange={this.handleChange}
                     label="e-mail"/>
                 
                    <FormInput type="password" name="password"
                     required value={this.state.password}
                     handleChange={this.handleChange}
                     label="password" />

                     <div className="buttons">
                     <CustomButton type="submit">SignIn </CustomButton> 
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        signIn With Google  </CustomButton> 
                     </div>
                   
                </form>

            </div>
        )
    }
}
export default SignIn