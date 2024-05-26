import React from 'react'
import CoursePanel from '../CoursePanel'
import Report from '../Report'

function QuizReport() {
  return (
    <div>
        <div className='container-row'>
            <div className='profileSection'><CoursePanel/></div>
            <div className='editProfileSection'><Report/></div>
        </div>
    </div>
  )
}

export default QuizReport
