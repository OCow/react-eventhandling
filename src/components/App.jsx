import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello, there!");
  const [btnColor, setBtnColor] = useState("white");

  function handleClick() {
    console.log("Button clicked");
    setHeading("Submitted");
  }

  function handleMouseOver() {
    console.log("Mouse over button, mouse over button!!!");
    setBtnColor("black");
  }

  function handleMouseLeave() {
    console.log("The mouse has gone, the mouse has gone!!!");
    setBtnColor("white");
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: btnColor }}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
