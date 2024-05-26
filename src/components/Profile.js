import React from 'react'
import '../styles/profile.css'
import profile1 from '../assests/Profile1.jpg'

function Profile() {
  return (
    <div className='container'>
        <div className='profilePicture'> <img src={profile1} className='display_Image'/> </div>
        <p className='userName'>Aalok Choudhari</p> 
        <p className='userEmail'>aalokchoudhari2021@gmail.com</p>
        <p className='userBio'>The Biotechnology Innovation Organization is the largest advocacy association in the world representing the biotechnology industry.</p>
        <button className='editButton' type='submit'>Edit Profile</button>
    </div>
  )
}

export default Profile
