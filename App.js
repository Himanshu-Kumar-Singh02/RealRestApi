require("dotenv").config()
const express = require("express");
const app = express();

const connectDB = require("./db/connect")

const products_routes = require("./routes/products")

const PORT = process.env.PORT||8000;

app.get("/",(req, res)=>{
    res.send("<h1>Hi I am Live</h1>");
})

//middleware or to set router
app.use("/api/products",products_routes);

const start = async ()=>{
    try{
      await connectDB(process.env.MONGODB_URL);
      app.listen(PORT,()=>{
        console.log(`I am connected to Port: ${PORT}`);
      })

    }catch(error){
      console.log(error)
    }
}

start();

