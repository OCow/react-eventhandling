import React, { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("white");
  const [mouseOverInput, setMouseOverInput] = useState(false);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello, there! ");

  function handleClick() {
    console.log("Button clicked");
    setGreeting("Hello, " + name); 
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

  function handleInputChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <input
        style={{ border: mouseOverInput ? "5px solid" : "1px solid" }}
        onMouseOver={handleInputMouseOver}
        onMouseLeave={handleInputMouseLeave}
        onChange={handleInputChange}
        type="text"
        placeholder="What's your name?"
        value={name}
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
