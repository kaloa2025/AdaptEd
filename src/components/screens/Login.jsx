import React from 'react'
import '../../styles/loginsignup.css'

const Login = () => {
    return(
        <div className='container'>
            <div className="header">
                <div className="heading1">LOGIN</div>
                
                
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
                <div className="submit1">Login</div>
                <div className="submit2">New Registration</div>
            </div>

            <div className="termscond">
                <div className="text">By clicking continue, you agree to our <span>Terms of Services</span> and <span>Privacy Policy</span></div>
            </div>


        </div>
    )
}

export default Login