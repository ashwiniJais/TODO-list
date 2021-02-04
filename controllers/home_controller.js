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
    if(req.body.description!=null){
    List.create(req.body,function(err,newList){
        if(err){
            console.log("error in creating newList");
            return;
        }
        console.log("****New Task added in TODO list****");
        return res.redirect('back');
    })
    }
    else{
        return res.redirect('back');
    }
}

module.exports.delete=function(req,res){
    console.log(req.query);
    let id=req.query.id;
    console.log(id);
    List.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting the task from database");
            return;
        }
        return res.redirect('back');
    })
}