const Post = require('../models/post');

exports.blogPosts = (req,res,next)=>{
    const posts = Post.getPosts();
    res.render('blogposts',{posts:posts});    
}

exports.createPost = (req,res,next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const post = new Post(title,description);
    post.saveBlog();
    res.redirect('/');
}

exports.createPostView = (req,res,next)=>{
    res.render('createpost',{editmode:false});    

}

exports.blogPostDetail = (req,res,next)=>{
    const id = req.params.id;
    const post = Post.getPostById(id);
    if(post===undefined){
        res.redirect('/');
    }
    res.render('blogdetail',{post:post});    

}

exports.deletePost = (req,res,next)=>{
    const id = req.params.id;
    Post.deleteById(id);
    res.redirect('/')

}

exports.updatePost = (req,res,next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const id = req.body.id;
   
    Post.updateBlog(id,title,description);
   
    res.redirect('/');
}

exports.editPostView = (req,res,next)=>{
    const id = req.params.id;
    const post = Post.getPostById(id);
    res.render('createpost',{editmode:true,post:post});
}