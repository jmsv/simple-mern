var express = require('express');
var User=require("../models/users");
var passport=require("passport");
var authenticate=require("../authenticate");

var router = express.Router();

// GET users listing. 
router.get('/', authenticate.verifyUser,function(req,res,next){
  User.find({})
  .then((users)=>{
    res.statusCode=200;
    res.setHeader("Content-type","application/json");
    res.json(users);

  },(err) => next(err))
  .catch((err) => next(err));
});

router.post('/signup', (req, res, next) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {  
   
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
        }
      else {  
        if(req.body.username)       
          user.username = req.body.username;    
        if(req.body.password)
          user.password = req.body.password;
       
        user.save((err,user)=>{
          if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
            return ;
          }
          else{
            passport.authenticate('local')(req, res, () => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json({success: true, status: 'Registration Successful!'}); 
              
            });  
          }
        })
    }
  });
});
  
router.post('/login', passport.authenticate('local'),(req, res) => {

    var token=authenticate.getToken({_id:req.user._id});

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token:token, status: 'You are successfully logged in!'});

});

router.get('/logout', (req, res) => {
    if (req.session) {       
      req.session.destroy();  
      res.clearCookie('session-id');    
      res.json({success:true, status:"You are logged out"});
      res.redirect('/');    
    }
    else {
      var err = new Error('You are not logged in!');
      err.status = 403;
     // next(err);
    }
})
module.exports = router; 