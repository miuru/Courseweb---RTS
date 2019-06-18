const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    course: [
        {
            type: Schema.Types.ObjectId,
            ref: 'course'
        }
    ],
    email: {
        type: String,
        required: true
    },
    mobileNum: {
        type: String,
        required: true
    },
    telephoneNum: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    permenentAddress: {
        type: String,
        required: true
    },
    inCaseEmg: {
        type: String,
        required: true
    },
    emgPhone: {
        type: String,
        required: true
    },
    highSchool: {
        type: String,
        required: true
    },
    extra: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Student', studentSchema);
