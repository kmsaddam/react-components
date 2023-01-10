import React, { Component } from "react";
import "../stylesheets/Book.css";

const Book = (props) => {
  return (
    <div className="Book">
      <h3 onClick={props.change}>{props.bookName}</h3>
      <h4>{props.writter}</h4>
      <input type="text" onChange={props.inputName} />
    </div>
  );
};

export default Book;
