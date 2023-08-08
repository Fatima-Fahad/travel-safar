const express = require('express');
const router = express.Router();




// Router

router.get('/', (req, res) => {
    const locals = {
        title: "Safar website",
        description: "A Saudi website to write your travel experience and express your opinion to the world"
    }
    


    res.render('index', {locals});
})

router.get('/explore', (req, res) => {
    res.render('explore');
})



module.exports = router;
