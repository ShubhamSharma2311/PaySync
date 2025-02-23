const mongoose = require("mongoose");
const { number } = require("zod");
mongoose.connect("mongodb+srv://admin:Shubham123@cluster0.ma6za.mongodb.net/");

const userSchema = mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true
    },
    password :{
        type : String,
        require : true
    },
    firstname : {
        type : String,
        require : true
    },
    lastname : {
        type : String,
        require : true
    }
});

const accountSchema = mongoose.Schema({
     userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
     } ,
     balance : {
        type : Number,
        require : true
     }
})

const User = new mongoose.model("users", userSchema);
const Account = new mongoose.model("Account",accountSchema)

module.exports = {User, Account}