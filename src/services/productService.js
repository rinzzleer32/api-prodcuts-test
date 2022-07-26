import Product from "../models/productsM.js";

export const productService = {
    getAll: () =>{
        try {
            return Product.find({},"-images");
        } catch (error) {
            return error
        }
    },
    getOne: (id) =>{
        try {
            return Product.findOne({_id:id});
        } catch (error) {
            return error
        }
    },
    Create: (newProduct) => {
        try {
            return Product.create(newProduct);
        } catch (error) {
            return error
        }
    },
    delete: (id) =>{
        try {
            return Product.findByIdAndUpdate(id,{deletedAt: new Date},{new:true});
            
        } catch (error) {
            return error;
        }
    },
    Update: (id, newProductData ) =>{
        try {
            return Product.findByIdAndUpdate(id,{ ...newProductData},{new: true});
            
        } catch (error) {
            return error;
        }
    }
}