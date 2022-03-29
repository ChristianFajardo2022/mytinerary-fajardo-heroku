import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer'
import authReducer from './authReducer'
import itinerariesReducer from './itinerariesReducers'
import userReducer from './userReducer'

const mainReducer = combineReducers({

    citiesReducer,
    itinerariesReducer,
    authReducer,
    userReducer,
    
})

export default mainReducer