import React from "react";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">10°</div>
      </div>
      <div className="button-container">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}
