import React from "react";
import MediaCard from "../components/cards";
import { useEffect, useState } from "react";
import axios from "axios";
import Video from '../img/video2.mp4'
import { Link as LinkRouter } from "react-router-dom"
import {connect} from "react-redux"
import citiesAction from "../redux/actions/citiesAction";
import { getThemeProps } from "@mui/system";





function Cities(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(()=>{
    props.fetchearCities()
 

  },[]) 

  function filterCards (event) {

    props.filtrarCities(props.cities, event.target.value)

  }


  
  return (

    <div className="citiesDiv">
      {/* <video playsInline autoPlay muted loop className="myVideo">
                <source src={Video} type="video/mp4" />
            </video> */}
      <div className="backgroundCities">
        <div class="box">
          <div class="input-wrapper">
            <input
              onKeyUp={filterCards}
              type="text"
              id="input"
              className="form-control"
              placeholder="Search City"
            />
            <label for="input" class="control-label">
              Available cities
            </label>
          </div>
        </div>
      </div>
      <div className="MediaCartCities">
        <div className="Cards2">
          <MediaCard cities={props.filterCities} />
        </div>
      </div>
      <button className='ButtonMain' >
        <LinkRouter to="Home"><span>¡Home!</span></LinkRouter>
        <div class="liquid"></div>
      </button>

    </div>
  );
}
const mapDispatchToProps  ={
  fetchearCities:citiesAction.fetchearCities,
  filtrarCities:citiesAction. filtrarCities,

}

const mapStateToProps = (state) =>{
  return{
      cities:state.citiesReducer.cities,
      auxiliar: state.citiesReducer.auxiliar,
      filterCities:state.citiesReducer.filterCities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);