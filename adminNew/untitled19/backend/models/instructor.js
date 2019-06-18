const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const course = require ('./course')
const InstructorSchema = new Schema({

    Name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Phone: {
        type: String,
        require: true
    },
    course: [
        {
            type: Schema.Types.ObjectId,
            ref: 'course'
        }
    ]
});


module.exports = mongoose.model('instructor',InstructorSchema);