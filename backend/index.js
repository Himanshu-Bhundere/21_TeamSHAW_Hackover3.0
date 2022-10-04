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

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(__dirname));
app.use('./build', express.static(path.join(__dirname, 'node_modules/three/build')))
app.use('./jsm', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')))


app.post('/login', async (req, res) => {
    const newUser = new Login(req.body);
    await newUser.save();
    res.redirect(`login`)

})

app.get('/', (req, res) => {
    console.log('User has connected...')
    res.render('index')
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
