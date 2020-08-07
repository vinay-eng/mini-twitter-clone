  
const mongoose = require('mongoose');

const connectDB = async ()=>{
  const conn = await mongoose.connect('mongodb+srv://new_user:dtu@1234@cluster0.jlfou.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindModify : false,
    useUnifiedTopology: true
  });
  console.log(`MongoDB is connected at host ${conn.connection.host}`);
};

module.exports = connectDB;