import axios from 'axios';

const activitiesActions = {

    fetchearActivities: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/allactivities')
            dispatch({type:'fetchActivities', payload:res.data.response.activities})
       }
    },
    // fetchearUnaItinerary: (id) =>{
    //     return async (dispatch, getState) => {
    //         const res = await axios.get("http://localhost:4000/api/allitineraries/"+id)
    //         console.log(res)
    //         dispatch({type:'fetchearUnaItinerary', payload:res.data.response.itinerary})

    //     }
    // },
    borrarActivities: (id)=>{
        return async(dispatch, getState) => {
            try {

                const respuesta = await axios.delete('http://localhost:4000/api/allactivities/'+id)

                dispatch({type:'deleteActivities', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },
    filtrarActivities: (activities, value)=>{

        return (dispatch,getState)=>{
            dispatch({type:'filtro', payload:{activities, value}})
        }
    },
    cargarActivities: (name,activities)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/itineraries' ,{name,activities})
            dispatch({type:'cargarItinerary', payload:respuesta.data.respuesta})

        }
    },
    filtrarActividadporItinerario: (id) =>{
console.log(id)
        return async(dispatch, getState) =>{
            
            const res = await axios.get(`http://localhost:4000/api/allactivities/itineraries/${id}`)
            console.log(res)
            dispatch({type: "filteractivityForItineraries", payload:res.data.respuesta})
           
            console.log(dispatch)
        }
    }
    


}

export default activitiesActions;