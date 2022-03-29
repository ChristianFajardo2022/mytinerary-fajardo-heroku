import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link as LinkRouter } from "react-router-dom";

export default function MediaCard(props) {
  

  return (
    <div className="MediaCartCities">
      {props.cities?.length !== 0 ? (
        props.cities?.map((evento) => (
          <Card className="Cards2" sx={{ maxWidth: 450 }}>
           <LinkRouter to={`/detail/${evento._id}`}> <CardMedia
              component="img"
              height="500" 
              alt="green iguana"
              img
              className="imagenescard"
              src={evento.image}
            /></LinkRouter>
            <div className="cardsdinamics1">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {evento.name} - {evento.country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {evento.description}
                </Typography>
              </CardContent>
              <CardActions className="CardActions">
              <LinkRouter to={`/detail/${evento._id}`}> <Button size="small">Learn More</Button></LinkRouter>
              </CardActions>
            </div>
          </Card>
        ))
      ) : (
        <h1>Ciudad no Encontrada</h1>
      )}
    </div>
  );
}