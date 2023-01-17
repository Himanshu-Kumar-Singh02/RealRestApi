const mongoose = require("mongoose");

const connectDB = (uri)=>{
    // console.log("db in connect");
   return mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   });
}

module.exports = connectDB;