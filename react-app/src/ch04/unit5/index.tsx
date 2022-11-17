import React from "react";
import { useState, useEffect } from "react";

let interval: NodeJS.Timeout | null = null;
let num = 0;

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    interval = setInterval(() => {
      num++;
      console.log(num);
    }, 1000);

    return () => {
      if (interval !== null) {
        clearInterval(interval);
        num = 0;
      }
    };
  }, [counter]);

  function clickHandler() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={clickHandler}>+1</button>
    </>
  );
};

export default App;
