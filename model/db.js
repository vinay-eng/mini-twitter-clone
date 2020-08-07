const mongoose = require('mongoose')


const TweetSchema = new mongoose.Schema({
    name:{
        type:String,
        required:['true','Please add a name']

    },
    caption:{
        type:String,
        required:['true','Please add a caption']
    },
    hashTags:{
        type:String,
        required:['true','Please add a caption']
    }
})

module.exports = mongoose.model('userTweets',TweetSchema);