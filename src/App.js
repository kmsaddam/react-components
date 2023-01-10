import React, { Component } from "react";
import "./App.css";
// import Person from "./components/Person";
import Book from "./components/Book";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Book List</h2>

        <Book bookName="Nil Somudro" writter="Alen Roy" />
        <Book bookName="Yellow Journalism" writter="Bisnu Dey" />
        <Book bookName="Black War" writter="Mrinmoye Gosh" />
        {/* <Person name="A" age="25">
          Basic info
        </Person>
        <Person name="B" age="28" />
        <Person name="C" age="35" /> */}
      </div>
    );
  }
}

export default App;
