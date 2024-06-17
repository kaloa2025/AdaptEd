import React, { useState, useEffect } from 'react';
import NewSuggestionForm from '../NewSuggestionForm';
import '../../styles/suggestionform.css';
import { Link, useParams } from 'react-router-dom';

function SuggestionForm() {
  const {id}=useParams();
  console.log(id);
  return (
    <div className='formcontainer'>
      <div className='form'>
        <NewSuggestionForm/>
      </div>
      <div>
        <Link to={`/${id}/suggested_courses`}><button className='getbut'>See Suggested courses</button></Link>
      </div>
    </div>
  );
}

export default SuggestionForm;
