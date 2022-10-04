const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    img: String,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true
    }
})

const Customer = mongoose.model('CustDetails', customerSchema);

module.exports = Customer;