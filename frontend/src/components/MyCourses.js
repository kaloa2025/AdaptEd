import React, { useEffect, useState } from 'react';
import '../styles/mycourses.css';
import { Link } from 'react-router-dom';

function MyCourses({ id }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchEnrolledCourses() {
      try {
        const response = await fetch(`https://adapted-1-back.onrender.com/api/users/${id}/enrolled-courses`);
        const data = await response.json();
        setCourses(data.map(enrollment => ({
          ...enrollment.courseId,
          grade: enrollment.grade,
          quizMarks: enrollment.quizMarks
        })));
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    }
    if (id) {
      fetchEnrolledCourses();
    }
  }, [id]);

  if(courses.length===0){
      return (
        <div className='Courcesbody'>
          <p className='C-text'>My Courses</p>
            <p className='course-name'> Find suggestions to get best suitable courses for you!</p>
        </div>
      );
    }

  return (
    <div className='Courcesbody'>
      <p className='C-text'>My Courses</p>
      <div className='course-container'>
        <div className='course-list'>
          {courses.map(course => (
            <div key={course._id} className="course-detail">
              <Link to={`/course/${id}/${course._id}`}><img src={course.thumbnailImage} alt={course.title} className="course-image"/></Link>
              <p className='course-name'>{course.title}</p>
              <p className='course-info'>Instructor: {course.instructorName}</p>
              <p className='course-info'>Duration: {course.duration}</p>
              <p className='course-info'>Grade: {course.grade}</p>
              <p className='course-info'>Quiz Marks: {course.quizMarks}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCourses;
