const express = require('express');
const router = express.Router();
const Post = require('../models/Post')




// Router


//  get home

router.get('/', async (req, res) => {

    try {
        const locals = {
            title: "Safar website",
            description: "A Saudi website to write your travel experience and express your opinion to the world"
        }
        
        let perPage =5;
        let page =req.query.page || 1;
        const data = await Post.aggregate([{ $sort: {createdAt:-1}}])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();

        // Count my posts
        const count = await Post.count();
        const nextPage = parseInt(page) +1 ;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);


        res.render('index', { 
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null 
        });

    }
    catch (error) {
        console.log(error);
    }

})


//  get post : id 
router.get('/post/:id', async (req, res) => {

    try {
        
        let slug = req.params.id;
        
        const data = await Post.findById({ _id: slug})

        const locals = {
            title: data.title,
            description: "A Saudi website to write your travel experience and express your opinion to the world"
        }
    
        res.render('post', { 
            locals,
            data,
            
        });

    }
    catch (error) {
        console.log(error);
    }

})

//   post : searchTarm 
router.post('/search', async (req, res) => {

    try {
        
        let searchTarm = req.body.searchTarm;
        const searchNoSpecialChar = searchTarm.replace(/[^a-zA-Z0-9 ]/g,"")

        const data = await Post.find({
            $or:[
                { title: {$regex: new RegExp(searchNoSpecialChar,'i')}},
                { body: {$regex: new RegExp(searchNoSpecialChar,'i')}},
                { auther: {$regex: new RegExp(searchNoSpecialChar,'i')}}
            ]
        })
        
    
        const locals = {
            title: "Seach",
            description: "A Saudi website to write your travel experience and express your opinion to the world"
        }
    
        res.render("search",{
            data,
            locals
        });
        
    }
    catch (error) {
        console.log(error);
    }

})


router.get('/explore', (req, res) => {
    res.render('explore');
})

// function insertPostData (){
//     Post.insertMany([
//         {
//             title: "Building a Blog",
//             body: "This is the body text"
//         }
//     ])
// }
// insertPostData();

module.exports = router;
