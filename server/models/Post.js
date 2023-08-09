const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    auther: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('Post',PostSchema)
