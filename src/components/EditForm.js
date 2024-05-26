import React from 'react'
import profile from '../assests/Profile1.jpg'

function EditForm() {
  return (
    <div>
      <div className='photoSection'>
        <img src={profile} className='profilePhoto'/>
        <div>
            <p className='Nheading'>Name</p>
            <p className='subtext'>Change profile photo</p>
        </div>
      </div>
      <p className='heading'>Username</p>
      <input className='input'/>
      <p className='heading'>Email</p>
      <input className='input'/>
      <p className='heading'>Bio</p>
      <input className='text-input'/>
      <br/>
      <button className='saveButton'>Save Changes</button>
    </div>
  )
}

export default EditForm
