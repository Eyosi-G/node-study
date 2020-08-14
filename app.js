const express = require('express');
const bodyParser = require('body-parser');
const path  = require('path');
const blog = require('./routes/blog');

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"assets")));
app.use(blog);
app.listen(8080,(err)=>{
    console.log(err);
})