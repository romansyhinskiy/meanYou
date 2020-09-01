const express = require("express");
const router = express.Router();
const User = require('../models/user')

// router.get('/registration', (req, res)=> {
//     res.send('Registration page')
// });

router.post('/registration', (req, res)=> {
     let newUser = new User({
         name: req.body.name,
         email: req.body.email,
         login: req.body.login,
         password: req.body.password,
     });

     User.addUser(newUser, (err, useer) =>{
         if(err)
             res.json({success: false, msg: "User not added"});
         else
             res.json({success: true, msg: "User added"});
     })
 });

router.get('/auth', (req, res)=> {
    res.send('Authentication page')
});

router.get('/dashboard', (req, res)=> {
    res.send('Dashboard page')
});

module.exports = router;