const mongoose = require('mongoose')


const activitiesSchema = new mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
   
    itinerarie: {type: mongoose.Types.ObjectId, ref: 'itineraries', required:true}
    
})


const Activities = mongoose.model('activities', activitiesSchema)
module.exports= Activities 
