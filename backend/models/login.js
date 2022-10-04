const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
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

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;