const express = require('express');
const router = express.Router();
const Course = require('../models/courseModel');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
    const { thumbnailImage, title, instructorName, duration, description, score, modules, quiz } = req.body;
  
    try {
      const newCourse = new Course({
        thumbnailImage,
        title,
        instructorName,
        duration,
        description,
        score,
        modules,
        quiz
      });
  
      const savedCourse = await newCourse.save();
      res.status(201).json(savedCourse);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/:courseId/quiz', async (req, res) => {
    try {
      const course = await Course.findById(req.params.courseId).select('quiz');
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course.quiz);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  router.patch('/:id/quiz', async (req, res) => {
    const { quiz } = req.body;
  
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
  
      course.quiz.push(...quiz);
      const updatedCourse = await course.save();
      res.json(updatedCourse);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;
