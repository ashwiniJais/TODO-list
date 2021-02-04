const express=require('express');
const port=8000;

const app=express();

//connecting to MongoDB
const db=require('./config/mongoose');
const List=require('./models/list');


//setting up view engine and using MVC structure
app.set('view engine','ejs');
app.set('views','./views');

//using middleware to read form data
app.use(express.urlencoded());

//Using static files
app.use(express.static('assets'));

//using routes
app.use('/',require('./routes/index'));

//running up the sever
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server on the port :${port}`);
        return;
    }
    console.log(`The server is running fine on the port : ${port}`);
})