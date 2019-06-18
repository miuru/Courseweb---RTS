const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AdminSchema = new Schema({

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
    }
});


module.exports = mongoose.model('admin',AdminSchema);