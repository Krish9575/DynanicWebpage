const mongoose=require("mongoose")

const Slider=mongoose.Schema({
    title: String,
    SubTitle: String,
    imageUrl: String,
    class:String
});

module.exports=mongoose.model('sliders',Slider);