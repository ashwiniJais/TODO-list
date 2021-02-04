const mongoose=require('mongoose');

//defining schema
 const listSchema=new mongoose.Schema({
     description:{
         type:String,
         required:true
     },
     category:{
        type:String,
        required:true
     },
     due_date:{
         type:Date,
         
     }
 })

 const List=mongoose.model('List',listSchema);
 //exporting the schema
 module.exports = List;