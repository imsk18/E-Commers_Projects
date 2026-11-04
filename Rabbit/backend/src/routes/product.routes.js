import express from "express"
import { handelDeleteProduct, handleCreateProduct, handleGetProducts, updateProduct } from "../controllers/product.controller.js"
import { authenticateUser, authenticateAdmin } from "../middleware/auth.middleware.js"


const router = express.Router()
/**
 * @routes POST api/product/
 * @description create new product
 * @access private
 */
router.post("/",authenticateAdmin,handleCreateProduct)

/**
 * @routes GET api/product/
 * @description fetched all products
 * @access private/admin
 */
router.get("/",authenticateUser,handleGetProducts)
/**
 * @routes PUT api/product/:id
 * @description create new product
 * @access private
 */
router.put("/:id",authenticateAdmin,updateProduct)

/**
 * @routes DELETE api/product/:id    
 * @description delete a product by id
 * @access private
 */

router.delete("/:id", authenticateAdmin, handelDeleteProduct)

export default router