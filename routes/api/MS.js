const express = require('express');
const MS = require('../../models/MS');

const router = express.Router();

//save details

router.post('/ms/save',(req,res)=>{

    let newPost = new MS(req.body);   

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err 
            });
        }
 
        return res.status(200).json({
            success:"Data Saved Successfully"
        });
    });
});


//get posts
router.get('/ms',(req,res) =>{
    MS.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});


//get a specific post
router.get("/ms/:id",(req,res) =>{

    let postId = req.params.id;
    
    MS.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            post
        });

    });

});


module.exports = router;
