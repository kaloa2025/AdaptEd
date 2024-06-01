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

  router.post('/update', async (req, res) => {
    try {
      const { userId, courseId, grade, quizMarks } = req.body;

      // Update user's enrolled course with quiz marks and grade
      await User.updateOne(
        { _id: userId, 'enrolledCourses.courseId': courseId },
        { $set: { 'enrolledCourses.$.grade': grade, 'enrolledCourses.$.quizMarks': quizMarks } }
      );

      // Update user's enrollment status for the course
      await Course.updateOne(
        { _id: courseId },
        { $addToSet: { enrolledUsers: userId } }
      );

      res.status(200).json({ message: 'User data updated successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
