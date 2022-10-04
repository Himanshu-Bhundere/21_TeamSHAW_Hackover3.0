const mongoose = require('mongoose');
const Sign = require('./signin');

mongoose.connect('mongodb://localhost:27017/Events', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const seedSignin = [
    {
        name: 'ameybagwe_12',
        email: "ameybagwe09@gmail.com",
        password: 'amey@bagwe_12'
    },
    {
        name: 'wesley_lewis',
        email: "weslew10@gmail.com",
        password: 'weslew1S'
    },
]

Sign.insertMany(seedSignin)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })