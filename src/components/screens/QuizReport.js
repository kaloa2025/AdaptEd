import React from 'react'
import CoursePanel from '../CoursePanel'
import Report from '../Report'
import { useParams } from 'react-router-dom'

function QuizReport() {
  const {userId,courseId}=useParams(); 
  return (
    <div>
        <div className='container-row'>
            <div className='profileSection'><CoursePanel userId={userId} courseId={courseId}/></div>
            <div className='editProfileSection'><Report userId={userId} courseId={courseId}/></div>
        </div>
    </div>
  )
}

export default QuizReport
