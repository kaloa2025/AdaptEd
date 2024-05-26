import React from 'react'
import Profile from '../Profile'
import EditForm from '../EditForm'
import '../../styles/editprofile.css'

function EditProfile() {
  return (
    <div className='container-row'>
        <div className='profileSection'><Profile/></div>
        <div className='editProfileSection'><EditForm/></div>
    </div>
  )
}

export default EditProfile
