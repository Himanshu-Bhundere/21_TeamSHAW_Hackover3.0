const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const Sign = mongoose.model('Signin', signSchema);

module.exports = Sign;