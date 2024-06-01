import React from 'react'
import Profile from '../Profile.js'
import '../../styles/dashboard.css'
import Suggestion from '../Suggestion.js'
import MyCourses from '../MyCourses.js'
import { useParams } from 'react-router-dom'
import AllCourses from '../AllCourses.js'

function Dashboard() {
  const { id } = useParams();
  return (
    <div className='container-row'>
        <div className='profileSection'><Profile id={id}/></div>
            <div className='container-column'>
                <div className=''><Suggestion/></div>
                <div className=''><MyCourses id={id}/></div>
                <div className=''><AllCourses id={id}/></div>
            </div>
    </div>
  )
}

export default Dashboard
