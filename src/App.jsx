import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Character from "./components/Character";
import useCounter from "./components/useCounter";

function App() {
  const { counter, increase, decrement, reset, character } = useCounter();

  useEffect(() => {
    
  }, [counter]);

  return (
    <div className="App">
      <div>
      {
        console.log(character)
      }
        <div>
            <Character c={character} />
        </div>
      
      </div>
      <div className="card">
        <button
          onClick={increase}
          disabled={counter === 826}
        >
          increment
        </button>

        <button onClick={decrement} disabled={counter === 0}>decrement</button>
      </div>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
