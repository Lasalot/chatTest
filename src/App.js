import React from "react";
import "./App.css";
import Emojis from "./emojiComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          style={{ maxHeight: 100 }}
          src="https://bitninja.io/themes/bitninja/assets/images/logo.png"
          className="App-logo"
          alt="logo"
        />
        <p>Chat Test for Taki, bottom right </p>
        <Emojis symbol="⬇️" label="downward" />
      </header>
    </div>
  );
}

export default App;
