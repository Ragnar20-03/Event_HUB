const mongoose = require('mongoose');
const { MONGO_URL } = require('../config');

mongoose.connect(MONGO_URL).then((r) => {
    console.log("Mongodb Connection Suceesfull");
}).catch((e) => {
    console.log("Something went wrong  ! mongoose coneection failed" , e );
})

const userSchema = new mongoose.Schema({
    username : String ,  //  username is email 
    password : String , 
    fname : {required : true , type : String },
    lname : {required : true , type : String },
})  

const adminSchema = new mongoose.Schema(  {
    username : {required : true , type : String },
    password : {required : true , type : String} , 
    fname : {required : true , type : String },
    lname : {required : true , type : String },
}  )

const eventSchema = new mongoose.Schema({
    ename : String , 
    edesc : String , 
    eprice : String , 
    eduration : String , 
    edate : String ,
    // cimg : String 
})

const Admin = mongoose.model('Admin' , adminSchema);
const User = mongoose.model('User' , userSchema);
const Event = mongoose.model('Event' , eventSchema);



module.exports = {
    Admin , User , Event
}