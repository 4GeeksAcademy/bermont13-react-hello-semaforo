import React, { useState } from "react";
import "../../styles/trafficLight.css";



const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const handleCycle = () => {
    const colors = showPurple ? ["red", "green", "yellow", "purple"] : ["red", "green", "yellow"];
    const currentIndex = colors.indexOf(color);
    const nextColor = colors[(currentIndex + 1) % colors.length];
    setColor(nextColor);
  };

  return (
    <div className="traffic-container">
      <div className={`light red ${color === "red" ? "glow" : ""}`} onClick={() => setColor("red")}></div>
      <div className={`light yellow ${color === "yellow" ? "glow" : ""}`} onClick={() => setColor("yellow")}></div>
      <div className={`light green ${color === "green" ? "glow" : ""}`} onClick={() => setColor("green")}></div>
      {showPurple && (
        <div className={`light purple ${color === "purple" ? "glow" : ""}`} onClick={() => setColor("purple")}></div>
      )}
      <button onClick={handleCycle}>🔁 Cambiar color</button>
      <button onClick={() => setShowPurple(!showPurple)}>
        {showPurple ? "Quitar púrpura" : "Añadir púrpura"}
      </button>
    </div>
  );
};

export default TrafficLight;
