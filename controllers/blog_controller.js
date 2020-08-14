const Post = require('../models/post');

exports.blogPosts = async (req,res,next)=>{
    const posts = await Post.getPosts();
    res.render('blogposts',{posts:posts});    
}

exports.createPost = async (req,res,next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const post = new Post(title,description);
    await post.saveBlog();
    res.redirect('/');
}

exports.createPostView = (req,res,next)=>{
    res.render('createpost',{editmode:false});    

}

exports.blogPostDetail = async(req,res,next)=>{
    const id = req.params.id;
    const post = await Post.getPostById(id);
    
    if(post===undefined){
        res.redirect('/');
    }
    res.render('blogdetail',{post:post});    

}

exports.deletePost = async(req,res,next)=>{
    const id = req.params.id;
    await Post.deleteById(id);
    res.redirect('/')

}

exports.updatePost = async(req,res,next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const id = req.body.id;
   
    await Post.updateBlog(id,title,description);
   
    res.redirect('/');
}

exports.editPostView = async(req,res,next)=>{
    const id = req.params.id;
    const post = await Post.getPostById(id);
    res.render('createpost',{editmode:true,post:post});
}