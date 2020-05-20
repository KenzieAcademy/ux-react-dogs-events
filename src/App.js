import React, { Component } from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    dogs: [
      {
        name: "Mon-El",
      },
      {
        name: "Kara",
      },
      {
        name: "Mischa",
      },
    ],
    newDogName: "",
  };

  handleChangeDogName = (event) => {
    this.setState({ newDogName: event.target.value });
  };
  handleAddNewDog = () => {
    let newDog = {
      name: this.state.newDogName,
    };
    this.setState((state) => ({
      dogs: [...state.dogs, newDog],
      newDogName: "",
    }));
  };

  render() {
    return (
      <div className="app">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Dogs</h2>
        <ul className="dogList">
          {this.state.dogs.map((dog, index) => (
            <li key={index}>
              <Dog dog={dog} />
            </li>
          ))}
        </ul>
        <br />
        <div>
          <input className ="newDog"
            type="text"
            placeholder="Input Dog Name Here"
            value={this.state.newDogName}
            onChange={this.handleChangeDogName}
          ></input>
          <button className="newDog-btn" onClick={this.handleAddNewDog} disabled={this.state.newDogName === ""}>Add New Dog</button>
        </div>
      </div>
    );
  }
}

export default App;