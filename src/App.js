import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    function smashBros() {
      alert("Do not hurt me no more");
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>Red flag hunt! </p>
          <button onClick={smashBros}> Smash it until you rage!</button>
        </header>
      </div>
    );
  }
}

export default App;
