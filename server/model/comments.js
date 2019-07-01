const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CommentSchema = new Schema({
    episode:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        max: 500,
        required: true
    },
    ipaddress:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now,
        required: true
    }
});

const Comment = mongoose.model('comments', CommentSchema);
module.exports = Comment;