import React from "react";
import "./card.css";

const Card = props => {
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/$?200*200`} />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
