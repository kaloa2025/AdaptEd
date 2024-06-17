import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/editprofile.css';

function EditForm({ id }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    bio: '',
    profilePicture: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`);
        const data = await response.json();
        setFormData({
          username: data.profile.username || '',
          email: data.email || '',
          bio: data.profile.bio || '',
          profilePicture: data.profile.profilePicture || ''
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/users/update-profile/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          bio: formData.bio,
          profilePicture: formData.profilePicture,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      console.log('Profile updated successfully:', updatedUser);

      // Redirect to dashboard
      navigate(`/dashboard/${id}`);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='photoSection'>
          <img src={formData.profilePicture || ''} className='profilePhoto' alt="Profile"/>
          <div>
            <p className='Nheading'>{formData.username || 'Please Update!'}</p>
            <p className='subtext'>Change profile photo</p>
            <input
              type="text"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
              className='forminput'
              placeholder="Enter Profile Picture URL"
            />
          </div>
        </div>
        <p className='heading'>Username</p>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className='forminput'
          placeholder="Enter Username"
        />
        <p className='heading'>Email</p>
        <input
          type="email"
          name="email"
          value={formData.email}
          className='forminput'
          readOnly
        />
        <p className='heading'>Bio</p>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className='text-input'
          placeholder="Enter Bio"
        />
        <br/>
        <button type="submit" className='saveButton'>Save Changes</button>
      </form>
    </div>
  );
}

export default EditForm;
