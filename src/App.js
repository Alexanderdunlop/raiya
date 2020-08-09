import React from "react";
import clothing from "./clothing.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <img src={clothing} />
        <h5>Raiyas banner</h5>
        <div className="links">
          <a>link 1</a>
          <a>link 2</a>
          <a>link 3</a>
        </div>
      </div>
      <header className="App-header">
        <p>Raiya is really cool</p>
        <h1>I like RAIYA LOTS</h1>
        <h3>xxx</h3>
      </header>
    </div>
  );
}

export default App;
