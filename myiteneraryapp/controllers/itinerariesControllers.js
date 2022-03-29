const Itineraries  = require('../models/itinerariesModules') 


const itinerariesController = {

    obtenerItineraries:  async (req,res)=>{ 
        let itineraries
        let error = null
        try{ 
            itineraries = await Itineraries.find()
        }catch(err){  
            error = err            
        }
        res.json({
            response : error ? 'ERROR' : {itineraries},
            success: error ? false : true,
            error:error
        })
    },

    obtenerUnItinerario: async (req, res)=>{
        const id =req.params.id
        console.log(req.params) 
        console.log(id)
        let itinerary
        let error = null

        try{
            itinerary = await Itineraries.find({ciudad:id})
           console.log(itinerary)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itinerary}, 
            success: error ? false : true,
            error: error
        })

    

    },


    cargarItinerario: async(req,res)=>{
        const {likes, hashtag, duration, price, comments, image, name, ciudad, title} = req.body.dataInput
        new Itineraries({
            likes:likes,
            hashtag:hashtag,
            duration:duration,
            price:price,
            comments:comments,
            image:image,
            name:name,
            ciudad:ciudad,
            title:title,

                    
                     }).save()
            .then((respuesta) => res.json({respuesta}))  
    },
 


    borrarItinerario: async (req,res)=>{ 
        const id = req.params.id
        

           await Itineraries.findOneAndDelete({_id:id})
           .then((respuesta) => res.json({respuesta}))

    },


    modificarItinerario: async (req, res)=>{
        const id = req.params.id
        const itinerarie = req.body.dataInput

        let itinerariedb = await Itineraries.findOneAndUpdate({_id:id}, itinerarie) 
        .then((respuesta) => res.json({respuesta}))
    },

    obtenerUnItinerarioPoridCiudad: async (req, res)=>{
        try {
            let itinerarie
            const id = req.params.id
            console.log(id)
            try{
                itinerarie = await Itineraries.find({ciudad:id})
                console.log(itinerarie)
            }catch(error){
                console.log(error)
            }
            res.json({respuesta:itinerarie,success:true})

        } catch (error) {
            console.log(error);
        }

    },
    likeDislike:async (req,res) =>{
        const id=req.params.id //LLEGA POR PARAMETRO DESDE AXIOS
        const user = req.user.id //LLEGA POR RESPUESTA DE PASSPORT

       await Itineraries.findOne({_id: id})

        .then((itinerary) =>{

            console.log(itinerary)
            if(itinerary.likes.includes(user)){
            Itineraries.findOneAndUpdate({_id:id}, {$pull:{likes:user}},{new:true})//PULL QUITA, SACA
               .then((response)=> res.json({success:true, response:response.likes}))
               .catch((error) => console.log(error))
            }else{
            Itineraries.findOneAndUpdate({_id: id}, {$push:{likes:user}},{new:true})//PUSH AGREGA
                .then((response) => res.json({success:true, response:response.likes}))
                .catch((error) => console.log(error))
            }
        }) 
        .catch((error) => res.json({success:false, response:error}))
    },
};

module.exports = itinerariesController