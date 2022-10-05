const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const bcrypt = require('bcrypt');

const Sign = require('./models/login');
const Contact = require('./models/contact')
const Organ = require('./models/organization')

const PORT = 5000

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
app.use(express.static(__dirname + '/views'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(__dirname));
app.use('./build', express.static(path.join(__dirname, 'node_modules/three/build')))
app.use('./jsm', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')))


app.post('/login', async (req, res) => {
    const { username, email, category, password, cpass } = req.body;
    const securePassword = async (password) => {
        const passwordHash = await bcrypt.hash(password, 10);
        return passwordHash;
    }
    console.log(securePassword(`${password}`));
    const newUser = new Sign({ username: `${username}`, email: `${email}`, category: `${category}`, password: `${securePassword(password)}`, cpass: `${securePassword(cpass)}` })
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

app.post('/events', async (req, res) => {
    const newCon = new Contact(req.body);
    await newCon.save();
    res.redirect(`contact`)
})

app.get("/events", async(req, res)=>{
    res.render("events")
})

app.get("/contact", async(req, res) => {
    res.render("contact")
})

app.listen(PORT, () => {
    console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
})
