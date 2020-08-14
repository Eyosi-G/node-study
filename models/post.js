const db = require('../utils/database');

module.exports = class Post{
    constructor(title,detail){
        this.title = title;
        this.detail = detail;
    }

    async saveBlog(){
        await db.insertPost(this);
    }

    static async updateBlog(id,title,detail){
        const current = new Date();
        const post = new Post();
        
        post.id = id;
        post.detail = detail;
        post.time = current.toLocaleString();
        post.title = title;
        
        await db.updatePost(post);

    }
    static async getPosts(){
        const posts = await db.getPosts();
        return posts;
    }

    static async getPostById(id){
       return db.findPostById(id);
    }

    static async deleteById(id){
        await db.deleteById(id);
    }

    
}