import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header />
      {/* Tinder Cards */}
      <TinderCards />
    </div>
  );
}

export default App;
