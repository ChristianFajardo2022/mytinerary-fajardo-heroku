import * as React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios"
import { Link as LinkRouter } from "react-router-dom"
import {connect} from "react-redux";
import citiesActions from "../redux/actions/citiesAction";
// import Itineraries from '../../backend/models/itinerariesModules';
import DetailItineraries from '../components/itineraries'
import itinerariesActions from '../redux/actions/itinerariesAction';




function CardsDetalle(props) {
  const { id } = useParams()

console.log(props.cities)
console.log(id)
  const [data, setData] = useState({element:props.cities.find((i)=>i._id.toString()===id.toString())})


  useEffect(()=>{
    if (props.cities.lenght<1){
      props.fetchearUnaCiudad(id)
      .then ((traerId)=>setData({element:traerId}))
    }
    window.scrollTo(0, 0)
    props.filtrarItinerarioporCiudad(id)
    
  },[])

  if (!data.element){
    return (<h1>Loading..</h1>)
  }

  return (

    <div className="cardsDetalle">
      
        <div className='cardsid'>
          <img className="imgDetail" src={data.element.image} />
          {data.element.name} - {data.element.country}
          <div>
            {data.element.description}
          </div>
          <DetailItineraries  id={id} />
        </div>
      
      <button className='ButtonMain' >
        <LinkRouter to={"/cities"}><span>¡Cities!</span></LinkRouter>
        <div class="liquid"></div>
      </button>
     
      {/* <div>
        <ItineraryAccordion itinerary={props.itineraries}/>
      </div> */}
    </div>
    
    )
}

  const mapDispatchToProps  ={
    fetchearCities:citiesActions.fetchearCities,
    filtrarCities:citiesActions. filtrarCities,
    fetchearUnaCiudad: citiesActions.fetchearUnaCiudad,
    filtrarItinerarioporCiudad: itinerariesActions.filtrarItinerarioporCiudad
    
  }
  
  const mapStateToProps = (state) =>{
    return{
        cities:state.citiesReducer.cities,
        auxiliar: state.citiesReducer.auxiliar,
        filterCities:state.citiesReducer.filterCities,
        itineraries:state.itinerariesReducer.itineraries
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(CardsDetalle)