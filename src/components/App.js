import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType = (e) => {
    setFilters(e.target.value)
  }

  const onFindPetsClick = () => {
    filters === "all" ? 
      fetch("http://localhost:3001/pets") : 
      fetch(`http://localhost:3001/pets?type=${filters}`)
      .then(resp => resp.json())
      .then(petData => setPets(petData))
      .catch(err => alert(err))
  }

  const onAdoptPet = (adoptedId) => {
    const updatedPets = pets.map(pet => pet.id === adoptedId ? { ...pet, isAdopted: true } : pet)
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;