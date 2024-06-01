const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const predictionSchema = new Schema({
    age: { type: Number, required: true },
    programmingExperience: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] },
    programmingLanguages: { type: String, enum: ['HTML/CSS', 'JavaScript', 'Java', 'Python', 'C++', 'None'] },
    projectInterests: { type: String, enum: ['Websites and web applications', 'Algorithms and data structures', 'Mobile app development', 'Data analysis and machine learning', 'Game development'] },
    learningGoal: { type: String, enum: ['Get a job in web development', 'Get a job in software development focusing on data structures and algorithms', 'Enhance current skills', 'Build personal projects', 'Prepare for coding interviews'] },
    algorithmComfort: { type: String, enum: ['Very comfortable', 'Somewhat comfortable', 'Not comfortable at all'] },
    designComfort: { type: String, enum: ['Very comfortable', 'Somewhat comfortable', 'Not comfortable at all'] },
    developmentTypeExcitement: { type: String, enum: ['Creating visually appealing user interfaces', 'Solving complex algorithmic problems', 'Working on backend services and APIs', 'Building full-stack applications'] },
    frontendFrameworks: { type: String, enum: ['React', 'Angular', 'Vue.js', 'None'] },
    javaFrameworks: { type: String, enum: ['Spring', 'Hibernate', 'None'] },
    problemSolvingApproach: { type: String, enum: ['Visualizing the problem and solution', 'Breaking down complex problems into simpler ones', 'Experimenting and iterating on solutions quickly', 'Following a structured and logical approach'] },
    score: { type: Number},
}, { timestamps: true });

module.exports = mongoose.model('Prediction', predictionSchema);
