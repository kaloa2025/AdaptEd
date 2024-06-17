import React, { useEffect, useState } from 'react';
import '../styles/coursepannel.css';
import { Link } from 'react-router-dom';

function CoursePanel({ userId, courseId }) {
  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState(null);

  async function getCourseDataById(courseId) {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${courseId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch course data');
      }
      const courseData = await response.json();
      return courseData;
    } catch (error) {
      setError(error.message);
      console.error('Error fetching course data:', error.message);
    }
  }

  useEffect(() => {
    console.log('useEffect triggered with courseId:', courseId);
    async function fetchCourseData() {
      try {
        const data = await getCourseDataById(courseId);
        setCourseData(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    if (courseId) {
      fetchCourseData();
    }
  }, [courseId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div><Link to={`/course/${userId}/${courseId}`}><img src={courseData.thumbnailImage} className='display_Image' alt={courseData.title} /></Link> </div>
      <p className='courseName'>{courseData.title}</p>
      <p className='author'>{courseData.instructorName}</p>
      <p className='duration'>{courseData.duration}</p>
      <p className='description'>{courseData.description}</p>
      <Link to={`/quiz/${userId}/${courseId}`}><button className='quizButton'>Take Quiz</button></Link>
      <br></br>
      <Link to={`/report/${userId}/${courseId}`}><button className='reportButton'>Report</button></Link>
      <br></br>
      <p className='notice'>* You can enroll in the course after taking our quiz</p>
    </div>
  );
}

export default CoursePanel;
