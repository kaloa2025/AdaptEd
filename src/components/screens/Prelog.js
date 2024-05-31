import React from 'react'
import '../../styles/loginsignup.css'
import { Link } from 'react-router-dom'

function Prelog() {
  return (
    <div>
        <div className='login-container'>
            <div className="header">
                <div className="heading1">WELCOME TO</div>
                <p className='heading3'>AdaptEd</p>
                <p className='tagline'>Committed to making learning accessible, enjoyable and effective for everyone.</p>
                <p className='details'>
                    AdaptEd is a revolutionary AI-driven educational platform
                    designed to cater to individual learning styles and paces. With a
                    focus on enhancing educational outcomes and promoting
                    mental well-being. Offering self-reflective learning spaces and
                    personalized learning journals, virtual field trips and interactive
                    study breaks, AdaptEd empowers students to take control of
                    their learning journey.
                </p>
            </div>
            <div className="user-container">
                <Link to='/login'><button className="presubmit1">Login</button></Link>
                <Link to='/signup'><button className="presubmit2">New Registration</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Prelog
