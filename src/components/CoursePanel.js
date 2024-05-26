import React from 'react'
import course1 from '../assests/course1.jpg'
import '../styles/coursepannel.css'

function CoursePanel() {
  return (
    <div className='container'>
        <div> <img src={course1} className='display_Image'/> </div>
        <p className='courseName'>Course Name</p> 
        <p className='author'>Author</p>
        <p className='duration'>4 Weeks</p>
        <p className='description'>Description</p>
        <button className='quizButton' >Take Quiz</button>
        <br></br>
        <button className='reportButton' >Report</button>
    </div>
  )
}

export default CoursePanel
