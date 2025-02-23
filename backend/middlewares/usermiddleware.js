const z = require("zod");
const {User} = require("../db")



const signupBody = z.object({
    username : z.string().email(),
    password : z.string().min(6),
    firstname : z.string(),
    lastname : z.string()

});
const SigninBody = z.object({
    username : z.string().email(),
    password : z.string().min(6)
})
async function checkUser (req,res,next){
   const {success} = signupBody.safeParse(req.body);
   if(!success){
         return  res.status(411).json({
               msg : "Invalid Input"
           })
       }

       

       next();
}

async function userExist (req,res,next){
    const existingUser =  await User.findOne({username:req.body.username});
       
    if(existingUser){
       return res.status(411).json({
            msg : "user already exist"
        })
    }

    next();
}

async function checkForSignin (req,res,next){
    const {success} = SigninBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            msg : "invalid Input !!"
        })
    }
    next();
}

module.exports = {checkUser , userExist, checkForSignin}



