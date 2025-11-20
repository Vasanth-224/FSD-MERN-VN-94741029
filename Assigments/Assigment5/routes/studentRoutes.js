const express = require("express");
const userRouter =express.Router();
const { insertUser,getUsers,updateuser,deleteUser,loginuser,regUser}=require('../controllers/studentController');


userRouter.post("/insert-user",insertUser)
userRouter.get("/get-users",getUsers)
userRouter.put("/update-user/:id",updateuser)
userRouter.delete("/delete-user/:name",deleteUser)
module.exports = userRouter;