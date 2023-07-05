const router = require('express').Router();
const User = require("../models/User")
const Cryptojs = require("crypto-js")
const dotenv = require('dotenv')

dotenv.config()

//Register
router.post("/register",async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email:req.body.email,
        password:Cryptojs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()//from cryptojs documentation (AES algorithm)
    })

    try{
        const savedUser = await newUser.save()//async await is used because it takes time to save
        res.status(201).json(savedUser)//201 is for succesfully edited
    }catch(err){
        res.status(500).json(err)
    }

    
})

//Login
router.post("/login",(req,res)=>{
    res.send("response")

})

module.exports = router