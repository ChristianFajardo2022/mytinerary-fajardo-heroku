import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ImgUnderConstruction from "../img/itineraryunderconstruction.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {useParams} from 'react-router-dom'
import { useEffect,useState } from "react";
import axios from "axios"
import itinerariesActions from "../redux/actions/itinerariesAction";
import {connect} from "react-redux"
import citiesAction from "../redux/actions/citiesAction";
import activitiesActions from "../redux/actions/activitiesAction";


function detailActivities(props){

  // const [expanded, setExpanded] = React.useState(false);

  // useEffect(()=>{ props.filtrarActividadporItinerario(props.id) },[])


    return(
      props.activitiesByItinerary.length > 0 ? (
        <div className="activitiescarrousell">
      {props.activitiesByItinerary.map((evento)=> {
           return(
            <div>  
           <div>
        <h1>Activities</h1>
        </div>
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide>{evento.title},{evento.image}</SwiperSlide>
        <SwiperSlide>{evento.title},{evento.image}</SwiperSlide>
        <SwiperSlide>{evento.title},{evento.image}</SwiperSlide>
      </Swiper>
      </div>
      )
    })}
      </div>
      ):
       (
        
        <div > <img className="imgUnder" src={ImgUnderConstruction}/></div>
    )
    );
    
    
}
const mapDispatchToProps  ={


  filtrarActividadporItinerario:activitiesActions.filtrarActividadporItinerario,
  
}

const mapStateToProps = (state) =>{
  return{

    activities:state.activitiesReducer.js.activities,
    activitiesByItinerary:state.itinerariesReducer.activitiesByItinerary,
      user:state.userReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(detailActivities)