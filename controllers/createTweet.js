const mongoose = require('mongoose')
const userTweet = require('../model/db')


exports.createTweet = async (req,res)=>{
    let query;
    const {name, caption} = req.body;
    console.log(name,caption)
    const dummy_hashtags = caption.match(/#[a-z]+/gi);
    const hashTags = dummy_hashtags.join()
    query = await userTweet.insertMany({
        name,
        caption,
        hashTags
    })
    if(query){
        res.status(200).json({success:true})
        console.log(typeof hashTags)
    }else{
        res.status(401).json({success:false})
    }
}

exports.getTweets_and_name = async (req,res)=>{
    let query;
    query = await userTweet.find()
    if(query){
        res.status(200).json({success:true,data:query})
    }
}