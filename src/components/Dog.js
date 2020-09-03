// Dog.js
import React from "react";

function Dog(props) {
  const handlePetDog = () => {
    alert("You pet " + props.dog.name)
  }
  return <div>{props.dog.name}
  <button onClick ={handlePetDog}>Pet Dog</button>
  </div>;
}

export default Dog;
