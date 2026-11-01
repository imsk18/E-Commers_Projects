import { Router } from "express";
import {handleLogin, handleRegister} from "../controllers/user.controller.js"

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

export default router



