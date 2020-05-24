// Dog.js
import React from "react";

const petTheDog = (dog) =>{
  alert(`You pet ${dog}!`)
};

function Dog(props) {
  return <div>{props.dog.name}
  <button onClick={() => petTheDog(props.dog.name)}>Pet the dog!</button></div>
  ;}

export default Dog;
