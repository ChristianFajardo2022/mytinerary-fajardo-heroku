import axios from 'axios';

const citiesActions = {

    fetchearCities: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('https://mytinerary-christianfajardo.herokuapp.com/api/ciudades')
            dispatch({type:'fetch', payload:res.data.response.ciudades})
       }
    },
    fetchearUnaCiudad: (id) =>{
        return async (dispatch, getState) => {
            const res = await axios.get("https://mytinerary-christianfajardo.herokuapp.com/api/ciudades"+id)
            dispatch({type:'fetch', payload:res.data.response.ciudades})
            return (res.data.response)
            
        }
    },
    borrarCities: (id)=>{
        return async(dispatch, getState) => {
            try {

                const respuesta = await axios.delete('https://mytinerary-christianfajardo.herokuapp.com/api/ciudades/'+id)

                dispatch({type:'delete', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },
    filtrarCities: (cities, value)=>{

        return (dispatch,getState)=>{
            dispatch({type:'filtro', payload:{cities, value}})
        }
    },
    cargarCities: (name,cities)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('https://mytinerary-christianfajardo.herokuapp.com/api/ciudades' ,{name,cities})
            dispatch({type:'cargarCity', payload:respuesta.data.respuesta})

        }
    },
    





}

export default citiesActions;