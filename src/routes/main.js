const express =require('express')
const Detail=require('../modules/Detail')
const Services = require('../modules/services')
const Slider=require("../modules/slider")
const Contact=require("../modules/contact")
const routes= express.Router()


routes.get("/", async (req,res)=>{

    const details= await Detail.findOne({"_id":"63f647baa798a986abe491cc"});
    const slides= await  Slider.find();
    const services= await Services.find();
    // console.log(slides)
    res.render('index',{
        details:details,
        slides:slides,
        services:services
    });
})
 
routes.get("/gallary",async (req,res)=>{
    const details= await Detail.findOne({"_id":"63f647baa798a986abe491cc"});
    res.render("gallary",{
        details:details
    })
})

// process contact form 

routes.post("/process-contact-form",async (req,res)=>{
    console.log("form is submitted");
    console.log(req.body);
    // save the data to db need module

    try{
     const data= await Contact.create(req.body)
     console.log(data)
     res.redirect("/")
    }
    catch(err){
        console.log(err)
        res.redirect("/")
    }
})


module.exports=routes