import React, { useState, useEffect } from 'react';
import NewSuggestionForm from '../NewSuggestionForm';
import '../../styles/suggestionform.css';

function SuggestionForm() {
  const [courses, setCourses] = useState([]);
  
  const [predictions, setPredictions] = useState([]);

  const fetchCourses = async () => {
    const response = await fetch('/api/courses');
    return response;
  };
  
  const fetchPredictions = async () => {
    const response = await fetch('/api/predict');
    return response;
  };

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const coursesResponse = await fetchCourses();
        const coursesData = await coursesResponse.json();
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses data:', error);
      }
    };

    const fetchPredictionsData = async () => {
      try {
        const predictionsResponse = await fetchPredictions();
        const predictionsData = await predictionsResponse.json();
        setPredictions(predictionsData);
      } catch (error) {
        console.error('Error fetching predictions data:', error);
      }
    };

    fetchCoursesData();
    fetchPredictionsData();
  }, []);

  const filterCoursesByPrediction = () => {
    if (predictions.length === 0 || courses.length === 0) {
      return [];
    }
// Assuming courses is an array of objects with a 'score' property
const filteredCourses = courses.filter(course =>
  predictions.some(prediction => {
    // Define the score ranges
    const courseRange = getScoreRange(course.score);
    const predictionRange = getScoreRange(prediction.score);
    
    // Check if the course score and prediction score lie in the same range
    return courseRange === predictionRange;
  })
);

// Function to determine the score range
function getScoreRange(score) {
  // Define score ranges here
  // For example: 1-5, 6-10
  if (score >= 1 && score <= 5) {
    return '1-5';
  } else if (score >= 6 && score <= 10) {
    return '6-10';
  } else {
    // Handle other cases if necessary
    return 'Other';
  }
}

// Return the filtered courses
return filteredCourses;

  };

  return (
    <div className='formcontainer'>
      <div className='form'>
        <NewSuggestionForm/>
      </div>
      <div>
        <p className='course-heading'>Courses</p>
        <p className='course-heading'> You scored {}</p>
        <div className='suggestion-topic-container'>
          {filterCoursesByPrediction().length > 0 ? (
            filterCoursesByPrediction().map((course) => (
              <div key={course.id} className="suggestion-topic-detail">
                <img src={course.image} alt={course.name} className="suggestion-topic-image"/>
                <div>
                  <p className='suggestion-topic-name'>{course.name}</p>
                  <p className='suggestion-topic-info'>Instructor: {course.instructor}</p>
                  <p className='suggestion-topic-info'>Duration: {course.duration}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-courses-message">Fill form to get best suitable courses</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SuggestionForm;
