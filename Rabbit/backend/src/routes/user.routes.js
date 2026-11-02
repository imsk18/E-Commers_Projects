import { Router } from "express";
import {getMe,  handleLogin, handleRegister} from "../controllers/user.controller.js"
import authenticateUser from "../middleware/auth.middleware.js";

const router = Router()

/**
 * @routes POST api/user/register
 * @description register new user
 * @access public
 * 
 */
router.post("/register",handleRegister)

/**
 * @routes POST api/user/login
 * @des login user
 * @access public
 */
router.post("/login",handleLogin)

/**
 * @routes Get api/user/get-me
 * @des get logged-in user
 * @access protected routes
 */

router.get("/get-me",authenticateUser,getMe)

export default router



