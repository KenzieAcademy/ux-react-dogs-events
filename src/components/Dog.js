// Dog.js
import React from "react";

function Dog(props) {
  const petDog = () => {
    alert("You pet " + props.dog.name)
  }
  return <div>{props.dog.name}
  <button onClick={petDog}>Pet Me!</button>
  </div>;
}

export default Dog;
