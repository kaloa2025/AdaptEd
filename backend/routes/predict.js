const express = require('express');
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
        const { programmingExperience, programmingLanguages, projectInterests, learningGoal, algorithmComfort, designComfort, developmentTypeExcitement, frontendFrameworks, javaFrameworks, problemSolvingApproach } = req.body;
        const age = req.body.age || '';
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

        res.status(201).json(savedPrediction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
