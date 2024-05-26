import React from 'react'
import '../styles/coursedetails.css'
import course1 from '../assests/course1.jpg'
const topics = [
    { id: 1, name: 'React for Beginners', instructor: 'John Doe', duration: '4 weeks',image:course1 },
    { id: 2, name: 'Advanced React', instructor: 'Jane Smith', duration: '6 weeks' ,image:course1},
    { id: 3, name: 'React Native', instructor: 'Bob Johnson', duration: '5 weeks' ,image:course1 },
    { id: 4, name: 'JavaScript Essentials', instructor: 'Alice Brown', duration: '3 weeks',image:course1},
  ];

function CourseDetails() {
  return (
    <div className='topic-container'>
            {topics.map(topic => (
            <div key={topic.id} className="topic-detail">
            <img src={topic.image} alt={topic.name} className="topic-image"/>
            <div>
            <p className='topic-name'>{topic.name}</p>
            <p className='topic-info'>Instructor: {topic.instructor}</p>
            <p className='topic-info'>Duration: {topic.duration}</p>
            </div>
            </div>
        ))}
    </div>
  )
}

export default CourseDetails
