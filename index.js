const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Login = require('./models/login');

mongoose.connect('mongodb://localhost:27017/eventHack', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(__dirname));


app.post('/login', async (req, res) => {
    const newUser = new Login(req.body);
    await newUser.save();
    res.redirect(`login`)

})

app.get('/login', async (req, res) => {
    res.render("login")
})

app.get("/events", async(req, res)=>{
    res.render("events")
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
})
