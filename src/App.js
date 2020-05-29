import React, { Component } from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    dogs: [
      {
        name: "Scruffles",
      },
      {
        name: "Snarf",
      },
      {
        name: "Wookie",
      },
    ],
    newDog: "",
  };
  handleInputChange = (event) => { 
    this.setState({ newDog: event.target.value })
  };
  handleAddNewDog = () => {
    let newDogObj = {
      name: this.state.newDog,
    };
    this.setState((state) => ({
      dogs: [...state.dogs, newDogObj],
      newDog: "",
    }));
   

   
  };
  render() {
    return (
  
      <div className="app">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Dogs</h2>
        <ul className="dogList">
          {this.state.dogs.map((dog, index) => (
            <li key={index} >
              <Dog dog={dog} />
            </li>
          ))}
        </ul>
        <br />
        <div>
          <input type="text" 
          value={this.state.newDog} 
          onChange={this.handleInputChange}>
          </input>
          <button onClick={this.handleAddNewDog} disabled={this.state.newDog === ""} >Add New Dog</button>
        </div>
      </div>
    
    );
   };
}

export default App;
