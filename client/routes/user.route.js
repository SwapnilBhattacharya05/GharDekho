import express from "express";
import { delteUser, getAllUsers, getUser, updateUser } from "../controller/user.controller.js";
import fetchUser from "../middleware/fetchUser.js";

const router = express.Router();

//Route 1:get request to get the details of a user
router.get("/getuser", fetchUser, getUser);

//Route 2: get request to get all users for admin
router.get("/getallusers", getAllUsers);

//Router 3:PUT request to update a userData
router.put("/update/:id", fetchUser, updateUser);

//Router 4:DELETE request to delete a user
router.delete("/delete/:id", fetchUser, delteUser);
export default router;