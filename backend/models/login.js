const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    cpass: {
        type: String
    }
})

const Sign = mongoose.model('Sign', signSchema);

module.exports = Sign;