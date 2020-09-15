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
  addNewDog = (event) => {
    this.setState({ newDog: event.target.value });
  };

  adoptDog = (event) => {
    this.setState((state) => {
      return {
        dogs: [...state.dogs, { name: state.newDog }],
        newDog: "",
      };
    });
  };
  render() {
    return (
      <div className="app">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Dogs</h2>
        <ul className="dogList">
          {this.state.dogs.map((dog) => (
            <li>
              <Dog dog={dog} />
            </li>
          ))}
        </ul>
        <br />
        <div>
          <input
            type="text"
            onChange={this.addNewDog}
            value={this.state.newDog}
          />
          <button onClick={this.adoptDog}>Adpot a dog</button>
        </div>
      </div>
    );
  }
}

export default App;
