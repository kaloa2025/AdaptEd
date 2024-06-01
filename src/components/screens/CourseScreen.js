import React from 'react'
import CoursePanel from '../CoursePanel.js'
import CourseDetails from '../CourseDetails.js'
import '../../styles/coursescreen.css'
import { useParams } from 'react-router-dom'

function CourseScreen() {
  const {userId,courseId}=useParams(); 

  return (
    <div>
        <div className='container-row'>
            <div className='profileSection'><CoursePanel  userId={userId} courseId={courseId}/></div>
            <div className='editProfileSection'><CourseDetails  userId={userId} courseId={courseId}/></div>
        </div>
        
    </div>
  )
}

export default CourseScreen