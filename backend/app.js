const PORT = process.env.PORT || 5000
const dotenv= require('dotenv');
const express = require('express')
const app = express()
dotenv.config();
require("./db/connect")
const cors = require("cors")
const bycrypt = require('bcrypt')
const User = require("./models/userSchema")
const Post = require("./models/postSchema")





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


//login
app.post("/login", async(req,res)=>{

    const exitEmail = await User.findOne({email:req.body.email})
    try {
        const exitPassword = await bycrypt.compare(req.body.password, exitEmail.password)
        if(exitEmail && exitPassword){
            return res.json({
                success:true,
                mess:"logined",
                data:exitEmail
            })
        }else{
            res.json({
                success:false,
                mess:"invalid"
            })
        }   
    } catch (error) {
        res.json({
            success:false,
            mess:"invalid"
        })
    }   
})


//add post
app.post("/post", (req,res)=>{

    const data = new Post(req.body)
    data.save()
    res.json({
        success:true,
        mess:"Post added",
        data:data
    })
})


//read post
app.get("/getpost", async(req,res)=>{

    const data = await Post.find()
    res.json({
        success:true,
        mess:"got all posts",
        data:data
    })
})


//delete post
app.post("/deletePost", async(req,res)=>{

    const{heading} = req.query;
    const data  =  await Post.findOneAndDelete({heading:heading})
    res.json({
        success:true,
        mess:'post Deleted',
        data:data
    })
});


app.patch("/updatePost/:id", async(req,res)=>{

    const{id} = req.params
    const data = await Post.findByIdAndUpdate(id,(req.body))

    res.json({
        success:true,
        mess:"post updated",
        data:data
    })
})


//all users
app.get("/allUsers", async(req,res)=>{

    const data = await User.find()
    res.json({
        success:true,
        mess:"all users fetced",
        data:data
    })
})




app.listen(5000, console.log(`backned started at ${PORT}`));