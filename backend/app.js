const PORT = process.env.PORT || 5000
const dotenv= require('dotenv');
const express = require('express')
const app = express()
dotenv.config();
require("./db/connect")
const cors = require("cors")
const User = require("./models/userSchema")
const bycrypt = require('bcrypt')





app.use(express.json())
app.use(cors())


//sigin
app.post("/sigin" , async(req,res)=>{

    const hasspass = await bycrypt.hash(req.body.password,12)
    const {name,email, phone, location} =  req.body;

    const empltyFiled = [];
    if(!name) empltyFiled.push("name")
    if(!email) empltyFiled.push("email")
    if(!location) empltyFiled.push("location")
    if(!phone) empltyFiled.push("phone")
    if(!hasspass) empltyFiled.push("password")

    if(empltyFiled.length>0){
        return res.json({
            success:false,
            mess:`${empltyFiled.join(' , ')} are required`
        })
    }


    const data = new User({name:name, email:email, phone:phone, location:location, password:hasspass})
    await data.save()
    res.json({
        success:true,
        mess:"Sigin done",
        data:data
    })
})






app.listen(5000, console.log(`backned started at ${PORT}`));