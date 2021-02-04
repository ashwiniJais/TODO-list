//require library
const mongoose=require('mongoose');
//connecting to mongodb
mongoose.connect('mongodb://localhost/TODO');

const db=mongoose.connection;
//if error in connection
db.on('error',console.error.bind(console,"Error in connecting to MongoDB"));
//if succesfully connected
db.once('open',function(){
    console.log("succesfully connected to MongoDB");
})

module.exports=db;