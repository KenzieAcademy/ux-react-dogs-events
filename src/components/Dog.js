// Dog.js
import React from "react";



function Dog(props) {
  const handlePetDog = (event) => {
    alert(`You pet ${props.dog.name}`)
  }

  return (
    <div>
      <p>{props.dog.name}</p>
      <button onClick={handlePetDog}> Pet {props.dog.name}</button>
    </div>
  )

}

export default Dog;
