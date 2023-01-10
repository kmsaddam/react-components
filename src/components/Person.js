import React from "react";

let Person = (props) => {
  console.log(props);
  return (
    <div>
      <h4>
        {props.children}
        Name: {props.name}, Age: {props.age} <br /> {Math.random()}
      </h4>
    </div>
  );
};

export default Person;
