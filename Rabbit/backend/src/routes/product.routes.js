import express from "express"
import { handleCreateProduct } from "../controllers/product.controller.js"
import authenticateUser from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/",authenticateUser,handleCreateProduct)


export default router