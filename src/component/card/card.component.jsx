import React from "react";
import   './card.style.css';

const Card = (props) => {
  console.log(props);
  return (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monsterCard.id}?set=set2&size=130x130`} alt="monster"  />
      <h2>{props.monsterCard.name}</h2>
      <p>{props.monsterCard.email}</p>
    </div>
  );
};

export default Card;
