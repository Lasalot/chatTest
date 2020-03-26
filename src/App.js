import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Chat Test for Taki </p>

          <p className="rightArrow">
            Kayako Chat
            <span role="img" aria-label="kayako">
              ⬇️
            </span>
          </p>

          <p className="leftArrow">
            Fresh Chat
            <span role="img" aria-label="kayako">
              ⬇️
            </span>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
