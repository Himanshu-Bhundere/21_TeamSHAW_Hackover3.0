const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();
const methodOverride = require('method-override')

const Sign = require('./backend/signin');

mongoose.connect('mongodb://localhost:27017/Events', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

router.get('/login', async (req, res )=> {
    res.sendFile('login.html')
})
    
router.post('/signup', async (req, res) => {
    const newUser = new Sign(req.body);
    await newUser.save();
    res.redirect(`/sign/${newUser._id}`)
})

router.get('/sign/:id', async (req, res) => {
    const { id } = req.params;
    const user = await Sign.findById(id)
    res.sendFile('index.html', { user })
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
})