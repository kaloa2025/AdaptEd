import React, { useEffect, useState } from 'react';
import '../styles/mycourses.css';
import { Link, useParams } from 'react-router-dom';

function AllCourses() {
  const {id}=useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch(`https://adapted-1-back.onrender.com/api/courses`);
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
    
    fetchCourses();
  }, []);

  if (courses.length === 0) {
    return (
      <div className='Coursesbody'>
        <p className='C-text'>Courses</p>
        <p className='course-name'>More courses will be updated soon!</p>
      </div>
    );
  }

  return (
    <div className='Coursesbody'>
      <p className='C-text'>Courses</p>
      <div className='course-container'>
        <div className='course-list'>
          {courses.map(course => (
            <div key={course._id} className="course-detail">
              <Link to={`/course/${id}/${course._id}`}><img src={course.thumbnailImage} alt={course.title} className="course-image"/></Link>
              <p className='course-name'>{course.title}</p>
              <p className='course-info'>Instructor: {course.instructorName}</p>
              <p className='course-info'>Duration: {course.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
