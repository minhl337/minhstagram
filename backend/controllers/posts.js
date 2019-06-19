const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
    index: async (req,res,next) => {
        const posts = await Post.find({})
        res.status(200).json(posts)
    },

    newPost: async (req,res,next) => {
        const author = await User.findById(req.value.body.author)
        const newPost = req.value.body
        delete newPost.author
        const post = new Post(newPost)
        post.author = author
        await post.save()
        author.posts.push(post)
        await author.save()
        res.status(200).json(post)
    },

    getPost: async (req,res,next)=>{
        const post = await Post.findById(req.value.params.postId)
        res.status(200).json(post)
    },

    replacePost: async (req,res,next)=>{
        const { postId } = req.value.params
        const newPost = req.value.params
        const result = await Post.findByIdAndUpdate(postId, newPost)
        res.status(200).json({ success: true })
        
    },
    
    updatePost: async (req,res,next)=>{
        const { postId } = req.value.params
        const newPost = req.value.params
        const result = await Post.findByIdAndUpdate(postId, newPost)
        res.status(200).json({ success: true })
    },

    deletePost: async (req,res,next)=>{
        const { postId } = req.value.params
        const post = await Post.findById(postId)
        if(!post){
            return res.status(404).json({ error: 'Post does not exist' })
        }
        const authorId = post.author
        const author = await User.findById(authorId)
        await post.remove()
        author.posts.pull(post)
        await author.save()
        res.status(200).json({ success:true })
    }
}