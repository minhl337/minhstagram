const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: false
    },
    git_url: {
        type: String,
        required: false
    },
    upload_date:{
        type: Date,
        default: Date.now
    },
    likes:{
        type: Number,
        required: false
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Post = mongoose.model('post', postSchema)
module.exports = Post

