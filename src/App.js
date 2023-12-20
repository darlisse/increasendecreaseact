import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const zeroCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increaseCount}> Increase Number </button>
      <button onClick={decreaseCount}> Decrease Number </button>
      <button onClick={zeroCount}> Set to Zero </button>
    </div>
  );
}

export default App;
