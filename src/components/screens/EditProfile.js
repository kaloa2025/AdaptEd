import React from 'react'
import Profile from '../Profile'
import EditForm from '../EditForm'
import '../../styles/editprofile.css'
import { useParams } from 'react-router-dom';

function EditProfile() {
  const { id } = useParams();
  return (
    <div className='container-row'>
        <div className='profileSection'><Profile id={id}/></div>
        <div className='editProfileSection'><EditForm id={id}/></div>
    </div>
  )
}

export default EditProfile
