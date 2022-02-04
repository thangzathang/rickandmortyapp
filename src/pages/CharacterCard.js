import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <div className="filmContainer">
      <div className="cardImageContainer">
        <img className={"imageContainerProfile"} src={character.image} alt={`${character.name}'s profile`} />
      </div>
      <h1>
        <Link to={`/characters/${character.id}`}>{character.name}</Link>
      </h1>
      <div className="filmContent">
        <h2>Name: {character.name}</h2>
        <h3>Status: {character.status}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>species: {character.species}</h3>
        <h3>
          Current Location: {`\n\n`}
          {character.location.name}{" "}
        </h3>
      </div>
    </div>
  );
};

export default CharacterCard;
