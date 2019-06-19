const Joi = require('joi')

module.exports = {
    validateParam: (schema, name) => {
        return (req,res,next)=>{
            const result = Joi.validate({ param: req['params'][name]}, schema)
            if(result.error){
                return res.status(400).json(result.error)
            } else {
                if(!req.value)
                    req.value = {}
                if(!req.value['params'])
                    req.value['params'] = {}
                req.value['params'][name] = result.value.param
                next()
            }
        }
    },

    validateBody: (schema) => {
        return (req,res,next)=>{
            const result = Joi.validate(req.body, schema)
            if (result.error){
                return res.status(400).json(result.error)
            } else {
                if(!req.value)
                    req.value = {}
                if(!req.value['body'])
                    req.value['body'] = {}
                req.value['body'] = result.value
                next()
            }
        }
    },


    schemas:{
        userSchema: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }),

        userOptionalSchema: Joi.object().keys({
            name: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string()
        }),

        userPostSchema: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            image_url: Joi.string(),
            git_url: Joi.string()
        }),

        postSchema: Joi.object().keys({
            author: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            title: Joi.string().required(),
            description: Joi.string().required(),
            image_url: Joi.string(),
            git_url: Joi.string()
        }),

        putPostSchema: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            image_url: Joi.string(),
            git_url: Joi.string()
        }),

        patchPostSchema: Joi.object().keys({
            title: Joi.string(),
            description: Joi.string(),
            image_url: Joi.string(),
            git_url: Joi.string()
        }),


        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    }
}
