import React, { useState, useEffect } from "react";
import "../../styles/index.css"; // ✅ ruta correcta para tus estilos

const Home = () => {
  const [color, setColor] = useState("red");
  const [autoMode, setAutoMode] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [showPurple, setShowPurple] = useState(false);

  const colors = showPurple
    ? ["red", "yellow", "green", "purple"]
    : ["red", "yellow", "green"];

  useEffect(() => {
    if (autoMode) {
      const id = setInterval(() => {
        setColor((prev) => {
          const index = colors.indexOf(prev);
          return colors[(index + 1) % colors.length];
        });
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [autoMode, showPurple]);

  return (
    <div className="text-center mt-5">
      <h2>🚦 Semáforo React</h2>
      <div className="traffic-light">
        {colors.map((c) => (
          <div
            key={c}
            className={`light ${c} ${color === c ? "glow" : ""}`}
            onClick={() => setColor(c)}
          ></div>
        ))}
      </div>

      <div className="mt-3">
        <button className="btn btn-success mx-2" onClick={() => setAutoMode(!autoMode)}>
          {autoMode ? "Detener automático" : "Modo automático"}
        </button>
        <button className="btn btn-secondary mx-2" onClick={() => setShowPurple(!showPurple)}>
          {showPurple ? "Quitar púrpura" : "Agregar púrpura"}
        </button>
      </div>
    </div>
  );
};

export default Home;
