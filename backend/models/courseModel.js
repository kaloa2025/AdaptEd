const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    modules: [moduleSchema]
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
