import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Functional Component</h2>
        <Person name="A" age="25">
          Basic info
        </Person>
        <Person name="B" age="28" />
        <Person name="C" age="35" />
      </div>
    );
  }
}

export default App;
