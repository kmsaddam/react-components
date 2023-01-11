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

  changeBookState = (newBookName) => {
    // console.log("Clicked Me!");
    this.setState({
      books: [
        { bookName: newBookName, writter: "Cosmoy Bill" },
        { bookName: "Sharlok Homes", writter: "Arobindu Gosh" },
        { bookName: "Raj Prashad", writter: "Omol Kanti" },
      ],
    });
  };

  changeWithInputState = (event) => {
    // event.preventDefault();
    // console.log("Event Called!");

    this.setState({
      books: [
        { bookName: event.target.value, writter: "Cosmoy Bill" },
        { bookName: "Sharlok Homes", writter: "Arobindu Gosh" },
        { bookName: "Raj Prashad", writter: "Omol Kanti" },
      ],
    });
  };

  deleteBookState = (index) => {
    // console.log("deleted !");
    // const books = this.state.books;
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books,
    });
  };

  render() {
    const style = {
      border: "solid 1px red",
      borderRadius: "5px",
      background: "black",
      color: "white",
    };
    // console.log(this.state);

    let bookState = this.state.books;

    const books = this.state.books.map((book, index) => {
      return (
        <Book
          bookName={book.bookName}
          writter={book.writter}
          delete={() => this.deleteBookState(index)}
        />
      );
    });

    console.log(books);

    return (
      <div className="App">
        <h2 style={style}>Book List</h2>

        {/* <p>
          <button onClick={() => this.changeBookState("Mission Kashmir")}>
            Change State
          </button>
          <input
            type="text"
            name="inputChange"
            onChange={this.changeWithInputState}
          />
        </p> */}

        {books}

        {/* <Book
          bookName={this.state.books[0].bookName}
          writter={this.state.books[0].writter}
          inputName={this.changeWithInputState}
        />
        <Book
          bookName={this.state.books[1].bookName}
          writter={this.state.books[1].writter}
        />
        <Book
          bookName={this.state.books[2].bookName}
          writter={this.state.books[2].writter}
          change={() => this.changeBookState("Mission Kashmir")}
        /> */}

        <p>{this.state.otherContent}</p>

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
