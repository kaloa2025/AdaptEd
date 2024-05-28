import React from 'react';

import './LoginSignup.css'

const Signup = () => {
    return(
        <div className='container'>
            <div className="header">
                <div className="heading1">Create an Account</div>
                <div className="heading2">Enter your email to sign up for this app</div>
                
            </div>

            <div className="inputs">
                <div className="input">
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <input type="password" placeholder="Password"/>
                </div>
            </div>


            <div className="submit-container">
                <div className="submit1">Sign up with email</div>
                <div className="submit2">Login</div>
            </div>

            <div className="termscond">
                <div className="text">By clicking continue, you agree to our <span>Terms of Services</span> and <span>Privacy Policy</span></div>
            </div>


        </div>
    )
}

export default Signup