import mongoose from "mongoose";

const messageModel= new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        //in ref it will come model namewhich is user to get the sender id 
        ref:"User",
        required:true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        //in ref it will come model namewhich is user to get the receiver id 
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }

},{timestamps:true})

export const Message= mongoose.model("Message",messageModel)