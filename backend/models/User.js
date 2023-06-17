const mongoose=require('mongoose')

const {Schema} = mongoose;

const UserSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
});

module.exports=mongoose.model('user',UserSchema)     //this statement creates collection named 'user' in our database with help of model we can use CRUD operation!