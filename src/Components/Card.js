import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = (props) => {
  
  // Sélection / Déselection d'un film  
  const handleClick = (movieName, movieCategory) => {
    props.clickToSelectParent(movieName, movieCategory);
  }

  return (
    <div className={props.status}>
      <p className="Card-Title">{props.movieName}</p>
      <img src={props.movieUrl} alt={props.movieName} className="Image"></img>
      <div
        className="Button"
        onClick={() => handleClick(props.movieName, props.movieCategory)}>
        {props.status === "Selected" ? "Selected!" : "Choose"}
      </div>
    </div>
  )
}

export default Card;