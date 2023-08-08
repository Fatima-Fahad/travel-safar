require('dotenv').config();

const express = require('express')
const expressLayout = require('express-ejs-layouts')

const app = express()

app.use(express.static('public'))


// Templating Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');


app.use('/',require('./server/routes/main'));


app.listen(3000, ()=> {

    console.log(' app is wokring on port 3000')
})

