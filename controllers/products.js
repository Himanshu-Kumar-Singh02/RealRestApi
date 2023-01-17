const Product = require("../models/products")

const getAllProducts = async (req, res)=>{
   // let {company, name} = req.query;
   // const myData = await Product.find(req.query).sort("name");
   // const myData = await Product.find(req.query).select("name");
   const myData = await Product.find(req.query).skip(0).limit(3);
   res.status(200).json({myData});
}

const getAllProductsTesting = async (req, res)=>{
   
   let {company, name, featured,price, sort, select} = req.query;
   let queryObject = {};
   
   if(company){
      queryObject.company = company;
   }

   if(featured){
      queryObject.featured = featured;
   }

   if(price){
      queryObject.price = price;
   }

   if(name){
      queryObject.name = {$regex: name, $options: "i"};  
   }
    
   let apiData = Product.find(queryObject);
   if(sort){
      let sortFix = sort.replace(","," ");
      apiData = apiData.sort(sortFix);
   }

   if(select){
      let selectFix = select.split(",").join(" ");
      apiData = apiData.select(selectFix);
   }

   let page = Number(req.query.page)||1;
   let limit = Number(req.query.limit)||3;

   let skip = (page-1)*limit;

   apiData = apiData.skip(skip).limit(limit)
    
   const Products = await apiData;
   res.status(200).json({Products,total:Products.length});
}

module.exports = {getAllProducts, getAllProductsTesting};