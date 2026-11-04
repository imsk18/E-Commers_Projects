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

        await product.save()

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

export const handleGetProducts = async(req,res)=>{
    const product = await productModel.find()

    res.status(200).json({
        message:"product fetched successfully ",
        product
    })
}


//update an existing product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct
    });

  } catch (error) {
    console.log("Update Product Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// DELETE a product

export const handelDeleteProduct = async(req,res)=>{
//  1) first way

try{
  //find product
  const  product = await productModel.findById(req.params.id)

  if(product){
    await product.deleteOne();

    res.status(200).json({
      success:true,
      message:"product deleted successfully"
    })
  }else{
    res.status(400).json({
      success:false,
      message:"product not found"
    })
  }
}catch(error){
  console.log(error);
  res.status(500).json({message:"server error"})
}


  // const {id}  = req.params

  // await productModel.findByIdAndDelete(id)

  // res.status(200).json({
  //   success:true,
  //   message:"product deleted successfully"
  // })

}

