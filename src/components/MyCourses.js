import React from 'react'
import '../styles/mycourses.css'
import course1 from '../assests/course1.jpg'

const courses = [
    { id: 1, name: 'React for Beginners', instructor: 'John Doe', duration: '4 weeks',image:course1 },
    { id: 2, name: 'Advanced React', instructor: 'Jane Smith', duration: '6 weeks' ,image:course1},
    { id: 3, name: 'React Native', instructor: 'Bob Johnson', duration: '5 weeks' ,image:course1 },
    { id: 4, name: 'JavaScript Essentials', instructor: 'Alice Brown', duration: '3 weeks',image:course1},
  ];

function MyCourses() {
  return (
    <div className='Courcesbody'>
        <p className='C-text'>My Courses</p>
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
  )
}

export default MyCourses
