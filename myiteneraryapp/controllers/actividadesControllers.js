const Activities  = require('../models/activitiesModules') 


const activitiesController = {

    obtenerActivities:  async (req,res)=>{ 
        let activities
        let error = null
        try{ 
            activities = await Activities.find()
        }catch(err){  
            error = err            
        }
        res.json({
            response : error ? 'ERROR' : {activities},
            success: error ? false : true,
            error:error
        })
    },

    obtenerUnActividad: async (req, res)=>{
        const id =req.params.id
        console.log(req.params) 
        console.log(id)
        let activity
        let error = null

        try{
            activity = await Activities.find({itinerario:id})
           console.log(activity)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {activity}, 
            success: error ? false : true,
            error: error
        })

    

    },


    cargarActividad: async(req,res)=>{
        const {title, image, activity} = req.body.dataInput
        new Activities({
            title:title,
            image:image,
            itinerarie:itinerarie,

                    
                     }).save()
            .then((respuesta) => res.json({respuesta}))  
    },
 


    borrarActividad: async (req,res)=>{ 
        const id = req.params.id
        

           await Activities.findOneAndDelete({_id:id})
           .then((respuesta) => res.json({respuesta}))

    },


    modificarActividad: async (req, res)=>{
        const id = req.params.id
        const activity = req.body.dataInput

        let activitydb = await Activities.findOneAndUpdate({_id:id}, activity) 
        .then((respuesta) => res.json({respuesta}))
    },

    obtenerUnaActividadPoridItinerario: async (req, res)=>{
        try {
            let activity
            const id = req.params.id
            console.log(id)
            try{
                activity = await Activities.find({ciudad:id})
                console.log(activity)
            }catch(error){
                console.log(error)
            }
            res.json({respuesta:activity,success:true})

        } catch (error) {
            console.log(error);
        }

    },

};

module.exports = activitiesController