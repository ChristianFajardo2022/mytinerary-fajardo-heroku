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
import DetailActivities from "./activities"
import activitiesActions from "../redux/actions/activitiesAction";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


function DetailItineraries (props) {
  console.log(props)
  const [expanded, setExpanded] = React.useState(false);
  const [reload, setReload] = useState(false)



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    
useEffect(()=>{ props.filtrarItinerarioporCiudad(props.id) },[],[reload])

async function likesOrDislikes(id_itinerario) {
  await props.likeDislike(id_itinerario)
  
  setReload(!reload)
}
// console.log(id_itinerario)

  return (
    props.itinerariesByCity.length > 0 ? (
      <div className='tineraries'>
    {props.itinerariesByCity.map((evento)=> {
      return( 
        <div>     
    <Card  className="detailItineraries" sx={{ maxWidth: "auto"} }>
      <div className="titletineraries"> 
        <h1>{evento.title}</h1>
      </div>
      <div className="infotineraries">
        <div className="imageuser">
        <img className="imageuser1" src={evento.image} />
        </div>
        <div>
          <h2>{evento.name}</h2>
        </div>
        <div className="price">
        <div >
          <h3>Duration: {"🕰️".repeat(parseInt(evento.duration))} </h3>
        </div>
        <div>
          <h3>Price:{"💶".repeat(parseInt(evento.price))}  </h3>
        </div>
        </div>
        <div className="likes">
        <div>
        {props.user ? (
                        <button onClick={()=>{likesOrDislikes(evento._id)}}>
                          {evento?.likes.includes(props.user.id) ? (
                            <span
                              style={{ color: "red", fontSize: 30 }}
                              class="material-icons"
                            >
                              favorite
                            </span>
                          ) : (
                            <span
                              style={{ fontSize: 30 }}
                              class="material-icons"
                            >
                              favorite_border
                            </span>
                          )}
                        </button>
                      ) : (
                        <span style={{ fontSize: 30 }} class="material-icons">
                          favorite_border
                        </span>
                      )}
                      <h3 style={{ color: "black ", fontSize: 30 }}>
                        {evento?.likes.length}
                      </h3>
        </div>
        <div>
          {/* <img src={process.env.PUBLIC_URL+ `/imagenes/${evento.likes}`  } /> */}
        </div>
        <div>
          <h3>{(evento.hashtag)}</h3>
        </div>
        </div>
      </div>
      <CardActions disableSpacing  className="cardViewmore" >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"

        >
              <button className="buttonClass">  {expanded ? "" : "View More"}</button>
        </ExpandMore>
      </CardActions>
      <Collapse  sx={{ maxWidth: 700}}  in={expanded} timeout="auto" unmountOnExit>
        <CardContent  >
        <div>
        {/* <DetailActivities id={id}/> */}
        </div>
       <div className='comments'> 
      <h1>Comments</h1>
      <h3>Under Construction 👷</h3>
         </div>
           <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
          <button className="buttonClass">View less</button>
          </ExpandMore>
        </CardContent>
      </Collapse>
    </Card>
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


  filtrarItinerarioporCiudad:itinerariesActions.filtrarItinerarioporCiudad,
  likeDislike:itinerariesActions.likeDislike,
  filtrarActividadporItinerario:activitiesActions.filtrarActividadporItinerario

}

const mapStateToProps = (state) =>{
  return{

      itineraries:state.itinerariesReducer.itineraries,
      itinerariesByCity:state.itinerariesReducer.itinerariesByCity,
      user:state.userReducer.user,
      activitiesByItinerary:state.itinerariesReducer.activitiesByItinerary,

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailItineraries)