import express from "express"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js"
import productRoutes from "./routes/product.routes.js"

const app = express()
app.use(cookieParser())

app.use(express.json())

// users apis
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)


export default app