const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');


console.log("router connected succesfully");

router.get('/', homeController.home);
router.post('/addtask',homeController.addTask);

router.get('/delete-task',homeController.delete);

module.exports = router;