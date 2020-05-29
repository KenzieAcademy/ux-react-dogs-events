// Dog.js
import React from "react";

function Dog(props) {
  return <div>
    <p>{props.dog.name}</p>
    <button onClick={ () => alert('${props.dog.name} is getting petted!!')}>Pet Dog</button>
  </div>;
} 


export default Dog;
