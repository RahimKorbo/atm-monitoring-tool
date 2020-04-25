import React, { Component } from 'react'
import Footer from './footer';
import { Link, Redirect } from "react-router-dom";



export default class login extends Component {
    state = {
        navigate: false
      }
    render() {
        const { navigate } = this.state

    // here is the important part
    if (navigate) {
      return <Redirect to="/dash" push={true} />
    }

        return (
            <div className="prelogin-page">
                
        <div className="full-container">
            <div className="login-container">
                <div className="central-box">
                    <div className="loginform-container ">
                       <div className="login-form">
                            <div className="brand-logo">
                                 <img src="../images/logo/kiya-logo.png" alt="logo" />
                               </div>
                            <div className="login-heading">
                                <h3>ATM Monitoring System</h3>
                             </div>
                            <div className="vspacer30"></div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="ux-component">
                                        <label htmlFor="FName">User Name</label>
                                        <input id="FName" type="text" />
                                    </div>
                                </div>
                               <div className="col-12">
                                    <div className="ux-component">
                                        <label htmlFor="LName1">Password</label>
                                        <input id="LName1" type="password" />
                                    </div>
                                </div>
                             </div>
                            <div className="vspacer10"></div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-footer">
                                        <button role="button" className="button" onClick={() => this.setState({ navigate: true })}>Login</button> 
                                       
                                    </div>
                                </div>
                               <div className="vspacer10"></div>
                                <div className="col-12">
                                    <div className="fgt-txt"><a href="#">Forgot Password?</a></div>
                                </div>
                                
                            </div>
                             <div className="vspacer50"></div>
                        </div>
                    </div>
                    
                 </div>
              </div>
             
        </div>
        <Footer />
         </div>
        
        )
    }
}
