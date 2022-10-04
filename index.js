const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})
