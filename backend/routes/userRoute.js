import express from "express"
import { getOtherUsers, Login, Logout, register } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router= express.Router();

router.route("/register").post(register)
router.route("/login").post(Login)
router.route("/logout").get(Logout)
router.route("/").get(isAuthenticated,getOtherUsers)


export default router