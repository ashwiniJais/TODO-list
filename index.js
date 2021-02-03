const express=require('express');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server on the port :${port}`);
        return;
    }
    console.log(`The server is running fine on the port : ${port}`);
})