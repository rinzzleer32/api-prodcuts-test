
import { request } from "express";
import { productService } from "../services/productService.js";
const productController ={
    getAll: async (req,res)=>{
        const allProducts = await productService.getAll();
        return res.status(200).json({
            status: 200,
            total:  allProducts.length,
            data: allProducts
        });
    },
    getOne:async (req,res)=>{
        
        const Product = await productService.getOne(id);
        return res.status(200).json({
            status: 200,
            data: Product
        });
    },
    create: async (req,res)=>{
        if(!req.body.name || !req.body.category){
            return res.status(400).json({
                status: 400,
                isStored: false,
                message: "The product name and category are requiered"
            })
        }
        const {name ,category,description,images} = req.body;
        const newProduct = {
            name,
            category,
            description,
            images
        }
        const ProductsCreated = await productService.Create(newProduct);
        return res.status(200).json({
            status: 200,
            data: ProductsCreated
        });
    },
    delete: async(req,res)=>{
        if(!req.body.name || !req.body.category){
            return res.status(400).json({
                status: 400,
                isStored: false,
                message: "The product name and category are requiered"
            })
        }
        const {id} = req.params;
        const response = await productService.delete(id);
        return res.status(200).json({
            status: 200,
            isDeleted:true,
            data: response
        });
    },
    update: async(req,res)=>{
        const {id} = req.params;

        const getProduct = await productService.getOne(id)
        if(!getProduct){
            return res.status(400).json({
                status: 400,
                isStored: false,
                message: "The product is not found"
            })
        }
        const uproduct ={
            name: req.body.name ?? getProduct.name ,
            category: req.body.category ?? getProduct.category,
            description: req.body.description ?? getProduct.description ,
            images: req.body.images ?? getProduct.images,
        }
        const response = await productService.Update(id,uproduct);
        return res.status(200).json({
            status: 200,
            isUpdated:true,
            data: response
        });
    },
    }



export default productController;