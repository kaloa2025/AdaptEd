const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Route to get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update user profile
  router.put('/update-profile/:id', async (req, res) => {
    try {
      const { username, bio, profilePicture } = req.body;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { 
          $set: { 
            'profile.username': username,
            'profile.bio': bio,
            'profile.profilePicture': profilePicture 
          }
        },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/:id/enrolled-courses', async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('enrolledCourses.courseId');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user.enrolledCourses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
