const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: { type: String, required: true },
    option1: { type: String, required: true },
    option2: { type: String, required: true },
    option3: { type: String, required: true },
    option4: { type: String, required: true },
    ans: { type: Number, required: true }
});

const moduleSchema = new Schema({
    thumbnailImage: { type: String, required: true },
    title: { type: String, required: true },
    instructorName: { type: String, required: true },
    duration: { type: String, required: true },
    grade: { type: String, default: '' },
    resourceLink: { type: String, required: true }
});

const courseSchema = new Schema({
    thumbnailImage: { type: String, required: true },
    title: { type: String, required: true },
    instructorName: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    score: { type: Number, required: true },
    modules: [moduleSchema],
    quiz: [questionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
