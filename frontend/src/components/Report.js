import React, { useEffect, useState } from 'react'
import '../styles/report.css'
import { Link, useParams } from 'react-router-dom';

function Report() {
  const { userId, courseId } = useParams();
  const [userData, setUserData] = useState(null);
  const [courseModules, setCourseModules] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://adapted-1-back.onrender.com/api/users/${userId}`);
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

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    const fetchCourseModules = async () => {
      if (!userData) return;

      try {
        const response = await fetch(`https://adapted-1-back.onrender.com/api/courses/${courseId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course data');
        }
        const courseData = await response.json();
        const userCourse = userData.enrolledCourses.find(course => course.courseId === courseId);
        const userGrade = userCourse ? userCourse.grade : null;
        if (userGrade) {
          const modulesWithSameGrade = courseData.modules.filter(module => module.grade === userGrade);
          setCourseModules(modulesWithSameGrade);
        }
      } catch (error) {
        setError(error.message);
        console.error('Error fetching course data:', error.message);
      }
    };

    if (userData && userData.enrolledCourses) {
      fetchCourseModules();
    }
  }, [courseId, userData]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData || !courseModules) {
    return <div>Loading...</div>;
  }

  const userCourse = userData.enrolledCourses.find(course => course.courseId === courseId);

  return (
    <div>
      <div className='scoresheet'>
        <p className='score-text'>SCORE</p> 
        <div className='marks'>
          <div>
            <p className='score-number'>{userCourse.quizMarks}</p>
            <hr/>
            <p className='score-number'>10</p>
          </div>
        </div>
        <div className='grade'>
          Level {userCourse.grade}
        </div>
        <div>
          <Link to={`/dashboard/${userId}`}><button className='dash_but'>Dashboard</button></Link>
        </div>
      </div>
      <div className='path'>
        <p className='heading-path'>Path</p>
        <div className='topic-container'>
          <div className='topic-list'>
            {courseModules.map(module => (
              <div key={module._id} className='topic-detail'>
                <a href={module.resourceLink} target="_blank" rel="noopener noreferrer">
                <img src={module.thumbnailImage} alt={module.title} className='topic-image' />
          </a>
                          <div className='topic-text-detail'>
                  <p className='topic-name'>{module.title}</p>
                  <p className='topic-info'>Instructor: {module.instructorName}</p>
                  <p className='topic-info'>Duration: {module.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
