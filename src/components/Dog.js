// Dog.js
import React from "react";

function Dog(props) {
  const handleClick = () => alert(`You have pet ${props.dog.name}`)
  return <>
    <div>{props.dog.name}</div>
    <button onClick={handleClick}>
      Pet Dog</button>
  </>
}

export default Dog;
