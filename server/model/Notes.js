const mongoose = require("mongoose") ;

const NoteSchema = new mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref :'User'
    },
    title:{
        type :String ,
        required: true 
    },
    body:{
        type : String ,
        required: true
    },
    createdAt :{
        type: Date,
        default :Date.now() 
    },
    updatedAt :{
        type: Date ,
        default: Date.now()
    }
}) ;


module.exports = mongoose.model('Note',NoteSchema) ;