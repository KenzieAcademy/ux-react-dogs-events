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

    newDog: '',
  };

  handleInputChange = (event) => {
    this.setState({ newDog: event.target.value });
  };

  handleAddNewDog = () => {
    if (this.state.newDog.length != 0) {
      let newDogObject = {
        name: this.state.newDog,
      };
      this.setState({
        dogs: [...this.state.dogs, newDogObject],
        newdog: "",
      });
    }
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
            className="adoptDogName"
            type="text"
            placeholder=" Adopted Dog's Name "
            value={this.state.newDog}
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleAddNewDog}> Adopt Dog </button>
        </div>
      </div>
    );
  }
}

export default App;
