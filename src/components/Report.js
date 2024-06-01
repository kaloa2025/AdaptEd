import React, { useEffect, useState } from 'react'
import '../styles/report.css'
import { useParams } from 'react-router-dom';

function Report() {
  const { userId, courseId } = useParams();
  const [userData, setUserData] = useState(null);
    const [courseModules, setCourseModules] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchUserData = async () => {
          try {
              const response = await fetch(`http://localhost:3000/api/users/${userId}`);
              if (!response.ok) {
                  throw new Error('Failed to fetch user data');
              }
              const userData = await response.json();
              setUserData(userData);
          } catch (error) {
              setError(error.message);
              console.error('Error fetching user data:', error.message);
          }
      };
      const fetchCourseModules = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/courses/${courseId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch course data');
            }
            const courseData = await response.json();
            const modulesWithSameGrade = courseData.modules.filter(module => module.grade === userData.profile.grade);
            setCourseModules(modulesWithSameGrade);
        } catch (error) {
            setError(error.message);
            console.error('Error fetching course data:', error.message);
        }
    };
      if (userId && courseId) {
        fetchUserData();
        fetchCourseModules();
    }
  }, [userId, courseId]);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData || !courseModules) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='scoresheet'>
        <p className='score-text'>SCORE</p> 
        < div className='marks'>
            <div>
            <p className='score-number'>{userData.enrolledCourses.find(course => course.courseId === courseId).quizMarks}</p>
            <hr/>
            <p className='score-number'>10</p>
            </div>
        </div>
        <div className='grade'>
            Level {userData.enrolledCourses.find(course => course.courseId === courseId).grade}
        </div>
      </div>
      <div className='path'>
        <p className='heading-path'>Path</p>
        <div className='topic-container'>
            <div className='topic-list'>
            {courseModules.map(module => (
                            <div key={module.id} className='topic-detail'>
                                <img src={module.image} alt={module.name} className='topic-image' />
                                <div className='topic-text-detail'>
                                    <p className='topic-name'>{module.name}</p>
                                    <p className='topic-info'>Instructor: {module.instructor}</p>
                                    <p className='topic-info'>Duration: {module.duration}</p>
                                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Report
