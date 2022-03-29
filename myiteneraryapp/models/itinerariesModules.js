const mongoose = require('mongoose')


const itinerariesSchema = new mongoose.Schema({
    title:{type:String,required:true},
    likes:{type:Array},
    hashtag:{type:String,required:true},
    duration:{type:String,required:true},
    price:{type:Number,required:true},
    comments: {type:String,required:true},
    image:{type:String,required:true},
    name: {type:String,required:true},
    // ciudad:{type:String,required:true}
    ciudad: {type: mongoose.Types.ObjectId, ref: 'ciudades', required:true}
    
})


const Itineraries = mongoose.model('itineraries', itinerariesSchema)
module.exports= Itineraries 
