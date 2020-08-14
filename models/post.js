let posts = [];

module.exports = class Post{
    constructor(title,detail){
        this._title = title;
        this._detail = detail;
    }

    saveBlog(){
        const current = new Date();
        this._time = current.toLocaleString();
        this._id = Date.now().toString();
        posts.push(this);
    }

    static updateBlog(id,title,detail){
        const current = new Date();
        const post = new Post();
        
        post._id = id;
        post._detail = detail;
        post._time = current.toLocaleString();
        post._title = title;
        
        for(let i=0;i<posts.length;i++){
            if(posts[i]._id===id){
                posts[i] = post;
                break;
            }
        }
    }
    static getPosts(){
        return posts;
    }

    static getPostById(id){
        return posts.find((val)=>val._id===id);
    }

    static deleteById(id){
        posts = posts.filter((val)=>val._id!==id);
    }

}