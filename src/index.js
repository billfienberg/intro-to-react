import React, { useState } from "react";
import ReactDOM from "react-dom";
import pets, { DOG, CAT, BUNNY } from "./pets";

function Pet(props) {
  const name = props.name;
  const age = props.age;
  const type = props.type;
  const style = { padding: "1rem", margin: "1rem", border: "1px solid black" };
  return (
    <div style={style}>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Type: {type}</div>
    </div>
  );
}

function ButtonGroup(props) {
  const setSelectedType = props.setSelectedType;
  return (
    <>
      <button type="button" onClick={() => setSelectedType(DOG)}>
        DOG
      </button>
      <button type="button" onClick={() => setSelectedType(CAT)}>
        CAT
      </button>
      <button type="button" onClick={() => setSelectedType(BUNNY)}>
        BUNNY
      </button>
    </>
  );
}

function PetList(props) {
  const [selectedType, setSelectedType] = useState(CAT);
  console.log(selectedType);

  const pets = props.pets;
  const filteredPets =
    selectedType === "ALL" ? pets : pets.filter(x => x.type === selectedType);
  return (
    <div>
      <ButtonGroup setSelectedType={setSelectedType} />
      {filteredPets.map(pet => {
        return <Pet {...pet} />;
      })}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PetList pets={pets} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
