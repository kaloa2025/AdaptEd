const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const router = express.Router();
const Prediction = require('../models/predictionModel');

router.get('/', async (req, res) => {
    try {
        const latestPrediction = await Prediction.findOne().sort({ createdAt: -1 });

        if (!latestPrediction) {
            return res.status(404).json({ message: 'Prediction not found' });
        }

        res.json({ score: latestPrediction.score });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/', async (req, res) => {
    try {
        const { 
            age, 
            programmingExperience, 
            programmingLanguages, 
            projectInterests, 
            learningGoal, 
            algorithmComfort, 
            designComfort, 
            developmentTypeExcitement, 
            frontendFrameworks, 
            javaFrameworks, 
            problemSolvingApproach 
        } = req.body;

        if (!age || !programmingExperience || !programmingLanguages || !projectInterests || !learningGoal || !algorithmComfort || !designComfort || !developmentTypeExcitement || !frontendFrameworks || !javaFrameworks || !problemSolvingApproach) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const prediction = new Prediction({
            age,
            programmingExperience,
            programmingLanguages,
            projectInterests,
            learningGoal,
            algorithmComfort,
            designComfort,
            developmentTypeExcitement,
            frontendFrameworks,
            javaFrameworks,
            problemSolvingApproach
        });

        const savedPrediction = await prediction.save();
        console.log('save complete');
        exec('python3 predict.py', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Python script: ${error}`);
                return res.status(500).send('Error executing prediction.');
            }

            console.log(`Python script output: ${stdout}`);
            res.status(201).json(savedPrediction);
        });
    } catch (error) {
        console.error('Server Error:', error.message);
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
