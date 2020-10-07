var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var passportLocalMongoose=require("passport-local-mongoose");
var User=new Schema({
  username:{   
    type: String,
    default:' '
  },
  password:{
    type: String,
    default:' '
  },

});
User.plugin(passportLocalMongoose);  //Adding passportLocalMongoose as a plugin which will add support to username and storage of hashed password. 

//Exporting model with User Schema from this module.
module.exports=mongoose.model("User",User);
