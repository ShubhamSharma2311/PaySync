const express = require("express");
const z  = require('zod')
const jwt = require("jsonwebtoken");
const router = express.Router();
const {User, Account} = require("../db");
const JWT_SECRET = require("../config");
const { checkUser, userExist, checkForSignin } = require("../middlewares/usermiddleware");
const { authMiddleware } = require("../middlewares/autharization");





router.post("/signup",checkUser,userExist,async (req,res)=>{
 
    const user = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname
    })
    const userId = user._id;
      
      
    await Account.create({
        userId,
        balance : Math.random()*10000 + 1
    })

    

    const token = jwt.sign({userId}, JWT_SECRET);

    res.json({
        msg : "User created successfully",
        token : token
    })

});

router.post("/signin",checkForSignin, async (req,res)=>{
    const user = await User.findOne({username : req.body.username,password : req.body.password});
    if(user){
        const token = jwt.sign({userId : user._id}, JWT_SECRET) 
        res.json({
            token : token
        })
        return 
    }

    res.status(411).json({
        msg : "Please create an account !!"
    })

})

router.put("/",authMiddleware, (req,res)=>{
   const  updateBody = z.object({
    firstname : z.string().optional(),
    lastname : z.string().optional(),
    password : z.string().optional()
   });

   const {success} = updateBody.safeParse(req.body);
   if (!success){
      res.status(411).json({
        msg : "Give valid Inputs"
      })

      User.updateOne({_id : req.userId}, req.body);

      res.status(200).json({
        msg : "Information Update Successfully"
      })
   }
});

router.get("/bulk" , async (req,res)=>{
    const filter = req.query.filter || "";
    const users =  await User.find({
        $or: [{firstname : {"$regex" : filter}},
            {lastname : {"$regex" : filter}}
        ]
    })

    res.json ({
        user : users.map(user=>({
            username : user.username,
            firstname : user.firstname,
            lastname : user.lastname,
            _id : user._id
        }))
    })
})

module.exports = router;