import React, { useEffect, useState } from 'react';
import '../styles/coursedetails.css';

function CourseDetails({ userId, courseId }) {
  const [modules, setModules] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchModules() {
      try {
        const response = await fetch(`https://adapted-1-back.onrender.com/api/courses/${courseId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course modules');
        }
        const courseData = await response.json();
        setModules(courseData.modules);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching course modules:', error.message);
      }
    }

    if (courseId) {
      fetchModules();
    }
  }, [courseId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!modules || modules.length === 0) {
    return <div>No modules found.</div>;
  }

  return (
    <div className='topic-container'>
      {modules.map(module => (
        <div key={module._id} className="topic-detail">
          <a href={module.resourceLink} target="_blank" rel="noopener noreferrer">
            <img src={module.thumbnailImage} alt={module.title} className="topic-image"/>
          </a>
          <div>
            <p className='topiac-name'>{module.title}</p>
            <p className='topic-info'>Instructor: {module.instructorName}</p>
            <p className='topic-info'>Duration: {module.duration}</p>
            <p className='topic-info'>Grade: {module.grade}</p>
            <a href={module.resourceLink} target="_blank" rel="noopener noreferrer" className='ref'>Get Started</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
