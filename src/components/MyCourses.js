import React from 'react'
import '../styles/mycourses.css'

const courses = [
    { id: 1, name: 'React for Beginners', instructor: 'John Doe', duration: '4 weeks' },
    { id: 2, name: 'Advanced React', instructor: 'Jane Smith', duration: '6 weeks' },
    { id: 3, name: 'React Native', instructor: 'Bob Johnson', duration: '5 weeks' },
    { id: 4, name: 'JavaScript Essentials', instructor: 'Alice Brown', duration: '3 weeks' },
  ];

function MyCourses() {
  return (
    <div className='Courcesbody'>
        <p className='C-text'>My Courses</p>
        <div className='course-container'>
            <div className='course-list'>
                 {courses.map(course => (
                <div key={course.id} className="course-detail">
                <h3>{course.name}</h3>
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default MyCourses
