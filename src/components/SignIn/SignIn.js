import React from "react"
import "./SignIn.scss"
import Form_Input from "./../Form-Input/Form-Input"
import CustomButton from "./../custom-button/CustomButton"

import  {signInWithGoogle} from"../../Firebase/Firebase"
class SignIn extends React.Component{
    state={
        email:"",
        password:""
    }

    handleSubmit=(e)=>{
        e.preventDefault()


        this.setState({
            email:"",
            password:''
        })
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
                   
                    <Form_Input type="email" name="email"
                     required value={this.state.email}
                     handleChange={this.handleChange}
                     label="e-mail"/>
                 
                    <Form_Input type="password" name="password"
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