const User = require('../models/user');
const Post = require('../models/post')
const pry = require('pryjs')

// fetch with callbacks
// module.exports={
//     index: (req, res, next)=>{
//         User.find({}, (err,users)=>{
//             if(err){
//                 next(err);
//             }
//             res.status(200).json(users);
//         })
//     },
//     newUser: (req,res,next)=>{
//         const newUser = new User(req.body);
//         newUser.save((err,user)=>{
//             res.status(201).json(user);
//         });
//     }
// }

//fetch with promises
// module.exports={
//     index: (req,res,next)=>{
//         User.find({})
//         .then(users=>{
//             res.status(200).json(users);
//         })
//         .catch(err =>{
//             next(err);
//         })
//     },
//     newUser: (req,res,next)=>{
//         const newUser = new User(req.body);
//         newUser.save()
//         .then(user => {
//             res.status(201).json(user)
//         })
//         .catch(err=>{
//             next(err)
//         })
//     }
// };

//fetch with Async/Await (Promises)
module.exports={
    index: async (req,res,next)=>{
        const users = await User.find({});
        res.status(200).json(users);
    },
    
    newUser: async (req,res,next) => {
        const newUser = new User(req.value.body);
        const user = await newUser.save();
        res.status(201).json(user);
    },

    getUser: async (req,res,next)=>{
        const { userId }= req.value.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    },

    replaceUser: async (req,res,next) => {
        // enforce that req.body must contain all the fields
        const { userId } = req.value.params;
        const newUser = req.value.body;
        const result = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true })
    },

    updateUser: async (req,res,next)=>{
        //req.body may contain any number of fields
        const { userId } = req.value.params;
        const newUser = req.value.body;
        const result = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true })
    },

    getUserPosts: async (req,res,next)=>{
        const { userId } = req.value.params;
        const user = await User.findById(userId).populate('posts')
        res.status(200).json(user.posts)
    },

    newUserPost: async (req,res,next)=>{
        const { userId } = req.value.params;
        //create new post
        const newPost = new Post(req.value.body)
        //get user
        const user = await User.findById(userId)
        // assign user as post author
        newPost.author = user
        //save the post
        await newPost.save()
        // add post to users post array
        user.posts.push(newPost)
        // save user 
        await user.save()
        res.status(201).json(newPost)
    }
};