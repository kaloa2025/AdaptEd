import React from 'react'
import CoursePanel from '../CoursePanel.js'
import CourseDetails from '../CourseDetails.js'
import '../../styles/coursescreen.css'

function CourseScreen() {
  return (
    <div>
        <div className='container-row'>
            <div className='profileSection'><CoursePanel/></div>
            <div className='editProfileSection'><CourseDetails/></div>
        </div>
    </div>
  )
}

export default CourseScreen