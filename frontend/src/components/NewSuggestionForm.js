import React, { useState } from 'react'
import '../styles/newsuggestionform.css'

function NewSuggestionForm() {

  const [formData, setFormData] = useState({
    age: 0,
    programmingExperience: '',
    programmingLanguages: '',
    projectInterests: '',
    learningGoal: '',
    algorithmComfort: '',
    designComfort: '',
    developmentTypeExcitement: '',
    frontendFrameworks: '',
    javaFrameworks: '',
    problemSolvingApproach: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      // Step 1: Log request payload
      console.log(JSON.stringify(formData));

      const response = await fetch('https://adapted-1-back.onrender.com/api/predict', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });

      // Step 3: Inspect network request
      console.log(response);

      if (!response.ok) {
          throw new Error('Failed to submit form');
      }

      // Reset form data after successful submission
      setFormData({
          age: 0,
          programmingExperience: '',
          programmingLanguages: '',
          projectInterests: '',
          learningGoal: '',
          algorithmComfort: '',
          designComfort: '',
          developmentTypeExcitement: '',
          frontendFrameworks: '',
          javaFrameworks: '',
          problemSolvingApproach: ''
      });
      alert('Form submitted successfully!');
  } catch (error) {
      // Step 4: Check server logs
      console.error('Error submitting form:', error.message);
      alert('Failed to submit form. Please try again later.');
  }
};


  return (
    <form onSubmit={handleSubmit} className='box'>
      <div className='que'>
    <label>What is your age?</label>
    <input 
        type='number' 
        value={formData.age} 
        onChange={handleChange} 
        name='age' 
        placeholder='Enter your age' 
    />
</div>

    <div className='que'>
        <label>What is your current level of programming experience?</label>
        <select name="programmingExperience" value={formData.programmingExperience} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
        </select>
    </div>
    <div  className='que'>
        <label>Which programming languages are you familiar with?</label>
        <select name="programmingLanguages" value={formData.programmingLanguages} onChange={handleChange}>
            <option value="">Select</option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
            <option value="None">None</option>
        </select>
    </div>

    <div  className='que'>
        <label>What type of projects are you most interested in?</label>
        <select name="projectInterests" value={formData.projectInterests} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Websites and web applications">Building websites and web applications</option>
            <option value="Algorithms and data structures">Developing algorithms and data structures</option>
            <option value="Mobile app development">Mobile app development</option>
            <option value="Data analysis and machine learning">Data analysis and machine learning</option>
            <option value="Game development">Game development</option>
        </select>
    </div>
    <div className='que'>
        <label>What is your primary goal for learning to code?</label>
        <select name="learningGoal" value={formData.codingGoal} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Get a job in web development">To get a job in web development</option>
            <option value="Get a job in software development focusing on data structures and algorithms">To get a job in software development focusing on data structures and algorithms</option>
            <option value="Enhance current skills">To enhance my current skills</option>
            <option value="Build personal projects">To build personal projects</option>
            <option value="Prepare for coding interviews">To prepare for coding interviews</option>
        </select>
    </div>
    <div  className='que'>
        <label>How comfortable are you with solving algorithmic problems?</label>
        <select name="algorithmComfort" value={formData.algorithmComfort} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Very comfortable">Very comfortable</option>
            <option value="Somewhat comfortable">Somewhat comfortable</option>
            <option value="Not comfortable at all">Not comfortable at all</option>
        </select>
    </div>
    <div  className='que'>
        <label>How comfortable are you with designing and styling web pages?</label>
        <select name="designComfort" value={formData.designComfort} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Very comfortable">Very comfortable</option>
            <option value="Somewhat comfortable">Somewhat comfortable</option>
            <option value="Not comfortable at all">Not comfortable at all</option>
        </select>
    </div>
    <div  className='que'>
        <label>Which type of development do you find more exciting?</label>
        <select name="developmentTypeExcitement" value={formData.developmentTypeExcitement} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Creating visually appealing user interfaces">Creating visually appealing user interfaces</option>
            <option value="Solving complex algorithmic problems">Solving complex algorithmic problems</option>
            <option value="Working on backend services and APIs">Working on backend services and APIs</option>
            <option value="Building full-stack applications">Building full-stack applications</option>
        </select>
    </div>
    <div  className='que'>
        <label>Do you have experience with any frontend frameworks/libraries? (Select all that apply)</label>
        <select name="frontendFrameworks" value={formData.frontendFrameworks} onChange={handleChange}>
            <option value="">Select</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue.js">Vue.js</option>
            <option value="None">None</option>
        </select>
    </div>
    <div  className='que'>
        <label>Do you have experience with any Java-based frameworks/libraries? (Select all that apply)</label>
        <select name="javaFrameworks" value={formData.javaFrameworks} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Spring">Spring</option>
            <option value="Hibernate">Hibernate</option>
            <option value="None">None</option>
        </select>
    </div>
    <div  className='que'>
        <label>Which of the following best describes your problem-solving approach?</label>
        <select name="problemSolvingApproach" value={formData.problemSolvingApproach} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Visualizing the problem and solution">I prefer visualizing the problem and solution</option>
            <option value="Breaking down complex problems into simpler ones">I enjoy breaking down complex problems into simpler ones</option>
            <option value="Experimenting and iterating on solutions quickly">I like to experiment and iterate on solutions quickly</option>
            <option value="Following a structured and logical approach">I prefer to follow a structured and logical approach</option>
        </select>
    </div>
    <button type="submit">Submit</button>
</form>
  )
}

export default NewSuggestionForm
