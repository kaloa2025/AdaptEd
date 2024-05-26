import React from 'react'
import course1 from '../assests/course1.jpg'
import '../styles/report.css'
const courses = [
    { id: 1, name: 'React for Beginners', instructor: 'John Doe', duration: '4 weeks',image:course1 },
    { id: 2, name: 'Advanced React', instructor: 'Jane Smith', duration: '6 weeks' ,image:course1},
    { id: 3, name: 'React Native', instructor: 'Bob Johnson', duration: '5 weeks' ,image:course1 },
    { id: 4, name: 'JavaScript Essentials', instructor: 'Alice Brown', duration: '3 weeks',image:course1},
  ];
function Report() {
  return (
    <div>
      <div className='scoresheet'>
        <p className='score-text'>SCORE</p> 
        < div className='marks'>
            <div>
            <p className='score-number'>80</p>
            <hr/>
            <p className='score-number'>100</p>
            </div>
        </div>
        <div className='grade'>
            Level A
        </div>
      </div>
      <div className='path'>
        <p className='heading-path'>Path</p>
        <div className='course-container'>
            <div className='course-list'>
                 {courses.map(course => (
                <div key={course.id} className="course-detail">
                <img src={course.image} alt={course.name} className="course-image"/>
                <p className='course-name'>{course.name}</p>
                <p className='course-info'>Instructor: {course.instructor}</p>
                <p className='course-info'>Duration: {course.duration}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Report
