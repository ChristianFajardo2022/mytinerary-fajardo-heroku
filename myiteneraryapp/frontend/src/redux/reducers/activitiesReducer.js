const initialState = {
    activities:[],
    auxiliar:[],
   filterItineraries: [], 
   activitiesByItinerary:  [],
}

const activitiesReducer = (state = initialState, action)=>{
    console.log(initialState)
    console.log(action)
    switch(action.type){
        case 'fetchActivities':

            return {
                ...state,
                activities: action.payload,
                auxiliar: action.payload,
                filterItineraries: action.payload
                
            }
            
        case 'deleteActivities':
            return {
                ...state,
                activities: action.payload
            }

        case 'cargarActivities':
            let activities = [...state.activities]
            activities.push(action.payload)
            return{
                ...state,
                activities, 
                auxiliar: [...activities]
            }

        case 'filtroActivities':
            const filtrado = action.payload.activities.filter((product => product.name.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))

            return {
                ...state,
                filterItineraries: filtrado

            }
        // case "fetchearUnaItinerary":
        //     return{
        //         ...state,
        //         itinerariesByCity: action.payload,
        //     }
            case "filterActivityForItineraries":
            let back = action.payload
            console.log(action.payload)
            return{
                ...state,
                activitiesByItinerary:action.payload
            
            }
        default:
            return state
    }
    

}
export default activitiesReducer