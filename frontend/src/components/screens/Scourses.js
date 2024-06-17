import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/scources.css';
import { Link, useParams } from 'react-router-dom';

function Scourses(){
  const {id} =useParams();
  console.log(id);
  const [predictionScore, setPredictionScore] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/predict');
        setPredictionScore(data.score);
      } catch (error) {
        console.error('Error fetching prediction score:', error);
      }
    };

    const fetchCourses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/courses');
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchPrediction();
    fetchCourses();
  }, []);

  const filterCoursesByPredictionScore = () => {
    if (predictionScore === null) return [];
    let rangeStart, rangeEnd;
    if (predictionScore >= 1 && predictionScore <= 5) {
      rangeStart = 1;
      rangeEnd = 5;
    } else if (predictionScore >= 6 && predictionScore <= 10) {
      rangeStart = 6;
      rangeEnd = 10;
    } else {
      return [];
    }
    return courses.filter(course => course.score >= rangeStart);
  };

  return (
    <div className='scources'>
      <div className='scoredisplay'><p className='course-heading1'> You scored</p>
      <p className='score'>{predictionScore}</p></div>
      
      <div className='suggestion-topic-container'>
        <p className='course-heading2'>Courses</p>
        {courses.length > 0 ? (
          filterCoursesByPredictionScore().map((course) => (
            <div key={course._id} className="suggestion-topic-detail">
              <Link to={`/course/${id}/${course._id}`}><img src={course.thumbnailImage} alt={course.title} className="suggestion-topic-image"/></Link>
              <div>
                <p className='suggestion-topic-name'>{course.title}</p>
                <p className='suggestion-topic-info'>Instructor: {course.instructorName}</p>
                <p className='suggestion-topic-info'>Duration: {course.duration}</p>
                <p className='suggestion-topic-info'>Description: {course.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-courses-message">Fill form to get best suitable courses</p>
        )}
      </div>
    </div>
  );
}

export default Scourses;
