import React, { Component } from 'react';
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import { GoogleLogin } from 'react-google-login';
import Firebase from "./Firebase";

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    GoogleLogin=()=>{
        const googleProvider = new Firebase.auth.GoogleAuthProvider();
        Firebase.auth().signInWithPopup(googleProvider).then((res) => {
            this.props.setUser(res.user);
        }).catch((error) => {
            console.log("err",error.message)
        })
    }

    FacebookLogin=()=>{
        const facebookProvider = new Firebase.auth.FacebookAuthProvider();
        Firebase.auth().signInWithPopup(facebookProvider).then((res) => {
            console.log("success",res.user)
        }).catch((error) => {
            console.log("err",error.message)
        })
    }

    render(){
        return(
            <div style={{textAlign:"center",width:"100%",paddingTop:"10%"}}>
                <span>
                    <GoogleLoginButton style={{display:"inherit",width:"250px"}} onClick={() => this.GoogleLogin()} />
                </span>
                <div />
                <span>
                    <FacebookLoginButton style={{display:"inherit",width:"250px"}} onClick={()=>this.FacebookLogin()} />
                </span>
            </div>
        )
    }
}