//in this routes only routes and their functions are written and all logics are written in controllers 
const express=require('express');
const router=express.Router();
const usercontroller=require('../controllers/usercontroller');

router.get('/users',(req,res)=>{
    usercontroller.getAllUsers(req,res);
})

    router.get('/user/:id',(req,res)=>{
        usercontroller.getUser(req,res);
})


module.exports = router;
//mvc-modern view controller