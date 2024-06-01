import React, { useEffect, useState } from 'react'
import '../styles/profile.css'
import profile1 from '../assests/Profile1.jpg'
import { Link } from 'react-router-dom';

function Profile({ id }) {
  const [userData, setUserData] = useState(null);

  async function getUserDataById(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw new Error(`Error fetching user data: ${error.message}`);
    }
  }

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data = await getUserDataById(id);
        setUserData(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    if(id)
    {
      fetchUserData();
    }
  }, [id]);


  
  if (!userData) {
    return (
    <div>
      <Link to={`/editprofile/${id}`}><button className='editButton' type='submit' style={{background:'#24ff00',color:'black'}}>Complete Profile</button></Link>
    </div>
    )
  }
  
  const { email, profile } = userData;
  const { username, bio, profilePicture } = profile;


  return (
    <div className='container'>
        <div className='profilePicture'> <img src={profilePicture} className='display_Image'/> </div>
        <p className='userName'>{username}</p> 
        <p className='userEmail'>{email}</p>
        <p className='userBio'>{bio}</p>
        <Link to={`/editprofile/${id}`}><button className='editButton' type='submit'>Edit Profile</button></Link> 
    </div>
  )
}

export default Profile
