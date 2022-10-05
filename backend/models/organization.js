const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
    nameOrg: {
        type: String,
        required: true
    },
    aadhar: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    eventName: {
        type: String,
    },
    category: {
        type: String
    },
    desc: {
        type: String
    },
    location: {
        type: String
    },
    landmark: {
        type: String
    },
    ticket: {
        type: Number,
    },
    datetime: {
        type: String,
    },
    duration: {
        type: Number
    }
})

const Organ = mongoose.model('Organ', orgSchema);

module.exports = Organ;