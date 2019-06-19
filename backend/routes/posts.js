const router = require('express-promise-router')()

const PostsController = require('../controllers/posts')
const {
    validateBody,
    validateParam,
    schemas
} = require('../helpers/routeHelpers')

router.route('/')
.get(PostsController.index)
.post(validateBody(schemas.postSchema),PostsController.newPost)

router.route('/:postId')
.get(validateParam(schemas.idSchema, 'postId'),PostsController.getPost)
.put([validateParam(schemas.idSchema, 'postId'),
    validateBody(schemas.putPostSchema)],
    PostsController.replacePost)
.patch([validateParam(schemas.idSchema, 'postId'),
    validateBody(schemas.patchPostSchema)],
    PostsController.updatePost)
.delete(validateParam(schemas.idSchema, 'postId'),
    PostsController.deletePost)

module.exports = router
