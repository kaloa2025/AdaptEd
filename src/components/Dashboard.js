import React from 'react'
import Profile from './Profile.js'
import '../styles/dashboard.css'
import Suggestion from './Suggestion.js'
import MyCourses from './MyCourses.js'

function Dashboard() {
  return (
    <div className='container-row'>
        <div className='profileSection'><Profile/></div>
            <div className='container-column'>
                <div className=''><Suggestion/></div>
                <div className=''><MyCourses/></div>
            </div>
    </div>
  )
}

export default Dashboard
