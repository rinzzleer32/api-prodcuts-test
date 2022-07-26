import mongoose from "mongoose";

const {Schema,model} = mongoose;
const productSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    images:{
        type: Array,

    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    DeletedAt:{
        type: Date
        
    }
});

const Product = model('product',productSchema);

export default Product;
