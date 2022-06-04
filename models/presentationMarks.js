const mongoose = require('mongoose');

const presentationMarkSchema = new mongoose.Schema({
    //variables
        Group_ID:{
            type:String,
            requred:true 
        },
        Student_ID1:{
            type:String,
            required:true
        },
        Student_ID2:{
            type:String,
            required:true
        },
        Student_ID3:{
            type:String,
            required:true
        },
        Student_ID4:{
            type:String,
            required:true
        },
        Student_name1:{
            type:String,
            required:true
        },
        Student_name2:{
            type:String,
            required:true
        },
        Student_name3:{
            type:String,
            required:true
        },
        Student_name4:{
            type:String,
            required:true
        },
        PanelNo:{
            type:Number,
            required:true
        }
    });
    
    module.exports = mongoose.model('presentationMarks', presentationMarkSchema);