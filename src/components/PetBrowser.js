import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {

  const mappedPets = pets.map(pet => <Pet key={pet.id} {...pet} onAdoptPet={onAdoptPet} />)

  return <div className="ui cards">{mappedPets}</div>;
}

export default PetBrowser;