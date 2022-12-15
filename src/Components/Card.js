import React from "react";
import "./Card.css";

const Card = (props) => {
  // Select / Unselect a movie
  const handleClick = (movieName, movieCategory) => {
    props.clickToSelectParent(movieName, movieCategory);
  };

  return (
    <div>
      <div
        className={
          props.isSelected
            ? "card-selected"
            : props.isExcluded
            ? "card-excluded"
            : "card-unselected"
        }
      >
        <div
          onClick={() => handleClick(props.movieName, props.movieCategory)}
          className={
            props.isSelected
              ? "card-image-container-selected"
              : "card-image-container"
          }
        >
          <img
            src={props.movieUrl}
            alt={props.movieName}
            className="card-image"
          ></img>
        </div>
        <div className="cart-text-container">
          <p className="card-title">{props.movieName.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
