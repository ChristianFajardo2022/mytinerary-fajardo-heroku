import axios from 'axios';

const itinerariesActions = {

    fetchearItineraries: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('https://mytinerary-christianfajardo.herokuapp.com/api/allitineraries')
            dispatch({type:'fetchItineraries', payload:res.data.response.itineraries})
       }
    },
    // fetchearUnaItinerary: (id) =>{
    //     return async (dispatch, getState) => {
    //         const res = await axios.get("https://mytinerary-christianfajardo.herokuapp.com/api/allitineraries/"+id)
    //         console.log(res)
    //         dispatch({type:'fetchearUnaItinerary', payload:res.data.response.itinerary})

    //     }
    // },
    borrarItineraries: (id)=>{
        return async(dispatch, getState) => {
            try {

                const respuesta = await axios.delete('https://mytinerary-christianfajardo.herokuapp.com/api/allitineraries/'+id)

                dispatch({type:'deleteItineraries', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },
    filtrarItineraries: (itineraries, value)=>{

        return (dispatch,getState)=>{
            dispatch({type:'filtro', payload:{itineraries, value}})
        }
    },
    cargarItineraries: (name,itineraries)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('https://mytinerary-christianfajardo.herokuapp.com/api/ciudades' ,{name,itineraries})
            dispatch({type:'cargarCity', payload:respuesta.data.respuesta})

        }
    },
    filtrarItinerarioporCiudad: (id) =>{
console.log(id)
        return async(dispatch, getState) =>{
            
            const res = await axios.get(`https://mytinerary-christianfajardo.herokuapp.com/api/allitineraries/ciudades/${id}`)
            console.log(res)
            dispatch({type: "filterItinerarieForCities", payload:res.data.respuesta})
           
            console.log(dispatch)
        }
    },
    likeDislike: (id) => {
        console.log(id)
        const token = localStorage.getItem('token')
        return async () => {
            try {
                let response = await axios.put(`https://mytinerary-christianfajardo.herokuapp.com/api/likeDislike/${id}`, {},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                console.log(response) 
                return response

            }catch (error) {
                console.log(error)
            }
        }
    }


}

export default itinerariesActions;