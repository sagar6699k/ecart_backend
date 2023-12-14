import express from "express";
import { getAllUser, loginUser, registerUser } from "../controllers/user.controllers.js";

const userRouter = express.Router();

// register users
userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/users", getAllUser)

export { userRouter };