const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const lodinLayout = '../views/layouts/login';
const jwtSecret= process.env.JWT_SECRET;

// get login page

router.get('/login', async (req, res) => {

    try {
        const locals = {
            title: "Login",
            description: "A Saudi website to write your travel experience and express your opinion to the world"
        }
        
        res.render('login/index', {locals, layout: lodinLayout});
        
    }
    catch (error) {
        console.log(error);
    }
})

// get check login 


router.post('/login', async (req, res) => {

    try {

        const { useremail , password} =req.body;

        const user = await User.findOne({useremail})


        if(!user){
            return res.status(401).json({message: 'Invalid credentials'});
        } 
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message: 'Invalid credentials'});
        } 

        const token = jwt.sign({userId: user._id},jwtSecret);
        res.cookie('token',token,{httpOnly: true});
        res.redirect('/admin')
        
        
    }
    catch (error) {
        console.log(error);
    }
})

// register 


router.post('/register', async (req, res) => {

    try {

        const { username , phonenumber ,useremail , password} =req.body;
        const hashedPassword = await bcrypt.hash(password,10);

        try {
            const user = await User.create({ username , phonenumber ,useremail , password:hashedPassword })
            res.status(201).json ({message: 'User Created', user });
        } catch (error) {
            if (error.code === 11000) {
                res.status(409).json({ message:'User already in use'});
            }    
                res.status(500).json({ message: 'Internal server error'})
        } 
        
    }
    catch (error) {
        console.log(error);
    }
})


router.get('/', async (req, res) => {

    res.render('admin');
});

module.exports = router;