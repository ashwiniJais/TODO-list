const List=require('../models/list');

module.exports.home=function(req,res){
    List.find({},function(err,todoList){
        if(err){
            console.log("error in fetching contacts from DB");
            return;
        }
        return res.render('home',{
            title:"TODO list",
            todo_list:todoList
        });
    })
    
    
    //return res.end('<h1>Controller connected</h1>');
}

module.exports.addTask=function(req,res){
    console.log(req.body);
    List.create(req.body,function(err,newList){
        if(err){
            console.log("error in creating newList");
            return;
        }
        console.log("****New Task added in TODO list****");
        return res.redirect('back');
    })
}