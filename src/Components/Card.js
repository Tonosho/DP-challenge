import React from 'react';
import './Card.css';

const Card = (props) => {

  // Sélection / Déselection d'un film  
  const handleClick = (movieName, movieCategory) => {
    props.clickToSelectParent(movieName, movieCategory);
  }

  return (
    <div className={props.status}>
      <p className="card-title">{props.movieName}</p>
      <img src={props.movieUrl} alt={props.movieName} className="card-image"></img>
      {/* Button  */}
      <div
        className={props.status === "card-selected" ? "card-selected-button" : "card-button"}
        onClick={() => handleClick(props.movieName, props.movieCategory)}>
        {props.status === "card-selected" ? "Selected!" : "Choose"}
      </div>
    </div>
  )
}

export default Card;