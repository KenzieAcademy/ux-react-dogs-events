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
    newDogName: "",
  };

  handleChangeDogName = (event) => {
    const value = event.target.value
    this.setState({newDog: value});
  };

  addDog = () => {
    this.setState((state) => {
      return {
        dogs: [
          ...this.state.dogs, 
          {id: 3, 
            description: this.state.newDogName, 
            isCompleted: false},
          ],
          newDogName: "",
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
          <input style={styles.itemInput} 
      onChange={this.handleChangeDogName} 
      value={this.state.newDogName}
      type="text" 
      />
    <button onClick={this.addDog} 
    style={styles.itemButton}>Add New Dog</button></div>
      </div>
    );
  }
}



const styles = {

  itemInput: {
    margin: ".2rem",
    width: "10rem",
  },
  itemButton: {
    margin: ".3rem",
  },
};


export default App;
