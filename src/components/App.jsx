import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello, there!");
  const [btnColor, setBtnColor] = useState("white");

  const [mouseOverInput, setMouseOverInput] = useState(false);

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

  function handleInputMouseLeave() {
    console.log("handleInputMouseLeave()");
    setMouseOverInput(false);
  }

  function handleInputMouseOver() {
    console.log("handleInputMouseOver()");
    setMouseOverInput(true);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input
        style={{ border: mouseOverInput ? "5px solid" : "1px solid" }}
        onMouseOver={handleInputMouseOver}
        onMouseLeave={handleInputMouseLeave}
        type="text"
        placeholder="What's your name?"
      />
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
