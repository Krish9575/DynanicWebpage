const express=require("express")
const hbs=require("hbs")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
const routes=require("./routes/main")
const Details=require("./modules/Detail")
const Slider=require("./modules/slider")
const Service=require("./modules/services")



app.use(bodyParser.urlencoded({
    extended:true
}))

app.use("",routes)
app.use("/static",express.static("public"));




// template engine
app.set('view engine','hbs')
app.set('views','views')
mongoose.set('strictQuery', false);

hbs.registerPartials("views/partials")

//database connection

mongoose.connect("mongodb://127.0.0.1/website_tut", ()=>{
    console.log("database connect");
    // Details.create({
    //     brandName:"Info Technical Solution",
    //     brandIconUrl:"https://i.pinimg.com/originals/ff/c5/3b/ffc53b25f267fd2ce44aa503c2c39251.jpg",
    //     links:[
    //         {
    //           label:"Home",
    //           url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"About Us",
    //             url:"/About US"
    //         },
    //         {
    //             label:"Gallary",
    //             url:"/Gallary"
    //         }
    //     ]
    // });

    // Slider.create([
    //     {
    //         title:"the Java",
    //         SubTitle:"java is good to learn",
    //         imageUrl:"/static/images/s2.jpg"
    //     },
    //     {
    //         title:"learnign the Java",
    //         SubTitle:" good to learn",
    //         imageUrl:"/static/images/s3.jpg"
    //     },
    //     {
    //         title:"learn the Java",
    //         SubTitle:"java  to learn",
    //         imageUrl:"/static/images/s4.jpg"
    //     }
    // ])

    // Service.create([

    //   {
    //     icon:'fa-thin fa-code-compare',
    //     title:'Provide best courses',
    //     description:' We provide that help our student in learning',
    //     linkText:'Check',
    //     link:'Support'
    //   },
    //   {
    //     icon:'fa-thin fa-code-compare',
    //     title:'Provide best courses',
    //     description:' We provide that help our student in learning',
    //     linkText:'Check',
    //     link:'Support'
    //   },
    //   {
    //     icon:'fa-thin fa-code-compare',
    //     title:'Provide best courses',
    //     description:' We provide that help our student in learning',
    //     linkText:'Check',
    //     link:'Support'
    //   }

    // ])

    
});



app.listen(process.env.PORT | 5556,()=>{
    console.log("server started");
})