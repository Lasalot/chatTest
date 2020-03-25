import React from "react";
import "./App.css";
import Emojis from "./emojiComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Chat Test for Taki, bottom right </p>

        <Emojis symbol="⬇️" label="downward" />
      </header>
    </div>
  );
}

export default App;
