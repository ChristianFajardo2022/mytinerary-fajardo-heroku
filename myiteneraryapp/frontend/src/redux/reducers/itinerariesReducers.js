const initialState = {
    itineraries:[],
    auxiliar:[],
   filterCities: [], 
   itinerariesByCity:  [],
}

const itinerariesReducer = (state = initialState, action)=>{
    console.log(initialState)
    console.log(action)
    switch(action.type){
        case 'fetchItineraries':

            return {
                ...state,
                itineraries: action.payload,
                auxiliar: action.payload,
                filterCities: action.payload
                
            }
            
        case 'deleteItineraries':
            return {
                ...state,
                itineraries: action.payload
            }

        case 'cargarItineraries':
            let itineraries = [...state.itineraries]
            itineraries.push(action.payload)
            return{
                ...state,
                itineraries, 
                auxiliar: [...itineraries]
            }

        case 'filtroItineraries':
            const filtrado = action.payload.itineraries.filter((product => product.name.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))

            return {
                ...state,
                filterCities: filtrado

            }
        // case "fetchearUnaItinerary":
        //     return{
        //         ...state,
        //         itinerariesByCity: action.payload,
        //     }
            case "filterItinerarieForCities":
            let back = action.payload
            console.log(action.payload)
            return{
                ...state,
                itinerariesByCity:action.payload
            
            }
        default:
            return state
    }
    

}
export default itinerariesReducer