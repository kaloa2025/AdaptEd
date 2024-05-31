const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {
        username: { type: String, default: '' },
        profilePicture: { type: String, default: '' },
        bio: { type: String, default: '' }
    },
    enrolledCourses: [
        {
            courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
            grade: { type: String, default: '' },
            quizMarks: { type: Number, default: 0 }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);