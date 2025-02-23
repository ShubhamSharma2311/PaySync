const express =  require("express");
const accountRoute = require("./account")
const router = express.Router()
const userRouter = require("./user")


router.use("/user/", userRouter)
router.use("/account",accountRoute);


module.exports =router;