const {Pool} = require('pg');

const client = new Pool({
    database:"blogpost",
    password:"password",
    user:"postgres",
    port:"5432"
})


client.connect((err)=>{
    console.log(err);
})


exports.insertPost = async (post)=>{
    post.time = new Date().toLocaleString();
    const q = `insert into blog (title,detail,time) values
    ('${post.title}','${post.detail}','${post.time}');
    `;
    console.log(q);
    try {
        await client.query(q);
    } catch (error) {
        console.log(error);
    } finally{
        // client.end();
    }
}

exports.getPosts = async()=>{
    
    const q = `select * from blog;`;
    try {
        const result = await client.query(q);
        // console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.log(error)
        
    }finally{
        // client.end();
    }
}

exports.findPostById = async(id)=>{
    
    const q = `select * from blog where id='${id}';`;
    try {
        const result = await client.query(q);
        return result.rows[0];
    } catch (error) {
        console.log(error)
        
    }finally{
        // client.end();
    }
}

exports.deleteById = async(id)=>{
    const q = `delete from blog where id='${id}';`;
    try {
        const result = await client.query(q);
       // console.log(result);
    } catch (error) {
        console.log(error)
        
    }finally{
        // client.end();
    }
}


exports.updatePost = async (post)=>{
    const q = `update blog set title='${post.title}',
    detail='${post.detail}',
    time = '${post.time}'
    where id='${post.id}';`;
    try {
        const result = await client.query(q);
    } catch (error) {
        console.log(error)
        
    }finally{
        // client.end();
    }
}