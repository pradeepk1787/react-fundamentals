import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(prev => prev + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          if (counter > 0) {
            setCounter(prev => prev - 1);
          }
        }}
      >
        Decrease
      </button>

      <button onClick={()=> {
        setCounter(0);
      }}>Reset</button>
    </div>
  );
}

export default Counter;
