const mongoose = require('mongoose');

const organizerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        uppercase: true,
        enum: ["M", 'F', "O"]
    },
    age: {
        type: Number,
        required: true,
    },
    aadhar: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        lowercase: true,
        enum: ["technical","cultural","social","music","shows"]
    }
})

const Organizer = mongoose.model('OrgDetails', organizerSchema);

module.exports = Organizer;