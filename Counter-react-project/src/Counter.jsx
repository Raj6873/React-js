import React, { useState } from "react";
import "../public/Counter.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleReset = () => setCount(0);

  return (
    <div className="app">
      <div className="card">
        <div className="glass">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2948/2948035.png"
            alt="Counter Icon"
            className="counter-img"
          />
          <h1>🌟 Pro Counter</h1>
          <p>Counts from <strong>0 to 10</strong>. Smooth, modern, and clean UI.</p>

          <div className="count">{count}</div>

          <div className="btn-group">
            <button className="btn plus" onClick={handleIncrement}>+</button>
            <button className="btn minus" onClick={handleDecrement}>-</button>
            <button className="btn reset" onClick={handleReset}>Reset</button>
          </div>

          <p className="footer">🔒 Limit: 0 ≤ value ≤ 10</p>
        </div>
      </div>
    </div>
  );
};

export default App;
