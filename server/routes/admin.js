const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

const adminLayout = '../views/layouts/admin';


// get admin login page

router.get('/admin', async (req, res) => {

    try {
        const locals = {
            title: "Admin",
            description: "A Saudi website to write your travel experience and express your opinion to the world"
        }
        
        res.render('admin/index', {locals, layout: adminLayout});

    }
    catch (error) {
        console.log(error);
    }
})









module.exports = router;