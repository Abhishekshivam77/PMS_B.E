//  schema and models here for users

const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name : {String ,required:true},
    email : {String ,required:true,unique:true},

    gender : String,
password : String,
age : Number,
city : String,
is_married : boolean

},{
    versionKey :false
})

const userModel = mongoose.model("user",userSchema);

module.exports = {userModel
};