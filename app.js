const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet')

mongoose.Promise = global.Promise;
// mongodb+srv://minh:minhminh@project-lqmnk.mongodb.net/test2?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost/mernstagram');
const app = express();
app.use(helmet())

//Routes
const users = require('./routes/users')
const posts = require('./routes/posts')
//Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());

//Routes
app.use('/posts', posts)
app.use('/users', users);

//Catch 404 Errors and forward them to error handler 
app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//Error handler function
app.use((err,req,res,next)=>{
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    //Respond to Client
    res.status(status).json({
        error: {
            message: error.message
        }
    });
    //Respond to ourselves
    console.error(err);
});
// Start the Server
const port = app.get('port') || 3000;
app.listen(port, ()=>console.log(`Server is listening on port ${port}`));