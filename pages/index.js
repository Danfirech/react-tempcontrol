import { useState } from "react";

export default function Home() {
  const [temperatureValue, setTemperatureValue] = useState(10);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">{temperatureValue}°</div>
      </div>
      <div className="button-container">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}
