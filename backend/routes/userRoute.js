import express from "express"
import { Login, register } from "../controllers/userController.js";

const router= express.Router();

router.route("/register").post(register)
router.route("/login").post(Login)

export default router