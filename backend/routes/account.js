const express = require("express");
const { authMiddleware } = require("../middlewares/autharization");
const { Account } = require("../db");
const  mongoose  = require("mongoose");
const app = express()
const router = express.Router();

app.use(express.json());


router.get("/balance",authMiddleware ,async (req,res)=>{
    
    
       const account = await Account.findOne({
        userId : req.userId
       })

       res.json({
        balance : account.balance
       })
})

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
     session.startTransaction();

    const { to, amount } = req.body;

    const account = await Account.findOne({ userId: req.userId }).session(session);
    if (!account || account.balance < amount) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ msg: "Insufficient funds" });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
        await session.abortTransaction();
        session.endSession();
        return res.status(403).json({ msg: "Invalid account" });
    }

    await Account.updateOne(
        { userId: req.userId },
        { $inc: { balance: -amount } },
        { session }
    );

    await Account.updateOne(
        { userId: to },
        { $inc: { balance: amount } },
        { session }
    );

    await session.commitTransaction();
    session.endSession();

    res.json({ msg: "Transfer successful" });
});







module.exports = router