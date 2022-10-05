const mongoose = require('mongoose');

const razorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    razorid: {
        type: String,
        required: true
    }
})

const Razor = mongoose.model('Razor', razorSchema);

module.exports = Razor;