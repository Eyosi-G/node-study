const express = require('express');
const blogController = require('../controllers/blog_controller');
const router = express.Router();


router.get('/post-detail/:id',blogController.blogPostDetail)
router.get('/',blogController.blogPosts);
router.get('/post',blogController.createPostView)
router.post('/post',blogController.createPost);
router.get('/delete-post/:id',blogController.deletePost);
router.post('/edit-post',blogController.updatePost);
router.get('/edit-post/:id',blogController.editPostView);


module.exports = router;