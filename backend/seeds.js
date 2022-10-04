const mongoose = require('mongoose');
const Sign = require('./signin');
const Customer = require('./customer');
const Organizer = require('./organizer');

mongoose.connect('mongodb://localhost:27017/Events', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// const seedSignin = [
//     {
//         name: 'ameybagwe_12',
//         email: "ameybagwe09@gmail.com",
//         password: 'amey@bagwe_12'
//     },
//     {
//         name: 'wesley_lewis',
//         email: "weslew10@gmail.com",
//         password: 'weslew1S'
//     },
// ]

// Sign.insertMany(seedSignin)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })

// const seedCustomer = [
//     {
//         img: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-male-avatar-simple-cartoon-design-png-image_5230556.jpg",
//         name: 'Amey Bagwe',
//         email: "ameybagwe09@gmail.com",
//         address: 'Sk Nagar',
//         mobile: '9769463254'
//     },
// ]

// Customer.insertMany(seedCustomer)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })

// const seedOrg = [
//     {
//         name: 'Amey Bagwe',
//         email: "ameybagwe09@gmail.com",
//         gender: "M",
//         age: 20,
//         aadhar: '9769463254',
//         speciality: "Technical"
//     },
// ]

// Organizer.insertMany(seedOrg)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })
