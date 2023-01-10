import React, { Component } from "react";
import "./App.css";
// import Person from "./components/Person";
import Book from "./components/Book";

class App extends Component {
  state = {
    books: [
      { bookName: "No Border", writter: "Alen Cross" },
      { bookName: "Yellow", writter: "Bisnu Dey" },
      { bookName: "Black War", writter: "Mrinmoye Gosh" },
    ],
    otherContent: "I am other Content",
  };

  changeBookState = () => {
    // console.log("Clicked Me!");
    this.setState({
      books: [
        { bookName: "Last Border", writter: "Cosmoy Bill" },
        { bookName: "Sharlok Homes", writter: "Arobindu Gosh" },
        { bookName: "Raj Prashad", writter: "Omol Kanti" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Book List</h2>

        <Book
          bookName={this.state.books[0].bookName}
          writter={this.state.books[0].writter}
        />
        <Book
          bookName={this.state.books[1].bookName}
          writter={this.state.books[1].writter}
        />
        <Book
          bookName={this.state.books[2].bookName}
          writter={this.state.books[2].writter}
        />

        <p>{this.state.otherContent}</p>

        {/* <Person name="A" age="25">
          Basic info
        </Person>
        <Person name="B" age="28" />
        <Person name="C" age="35" /> */}

        <button onClick={this.changeBookState}>Change State</button>
      </div>
    );
  }
}

export default App;
