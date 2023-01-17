const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required:[true, "price must be provided"],
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type: Number,
        default: false,
    },
    createdAt:{
        type: Date,
        deafult: Date.now(),
    },
    company:{
        type: String,
        enum:{
            values:["apple","samsung","dell","LG","HP","nokia"],
            message:`{VALUE} is not supported`
        },
    },
});

module.exports = mongoose.model("Product",productSchema);