import productModel from "../models/product.model.js";

export const handleCreateProduct = async(req,res)=>{
    try{
         const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            sku,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            metaTitle,
            metaDescription,
            metaKeywords,
            dimensions,
            weight
        } = req.body;

        // using create method
        // const product = await productModel.create({
        //     name,
        //     description,
        //     price,
        //     discountPrice,
        //     countInStock,
        //     sku,
        //     category,
        //     brand,
        //     sizes,
        //     colors,
        //     collections,
        //     material,
        //     gender,
        //     images,
        //     isFeatured,
        //     isPublished,
        //     tags,
        //     metaTitle,
        //     metaDescription,
        //     metaKeywords,
        //     dimensions,
        //     weight,
        //     user: req.user._id
        // } )  
        
        // save
        const product = new productModel({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            sku,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            metaTitle,
            metaDescription,
            metaKeywords,
            dimensions,
            weight,
            user: req.user._id
        } )

        await product.save

          res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        })

          res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        });





    }catch(error){
        success:false
        console.log(error);
        res.status(500).json({message:"server error"})
    }
}