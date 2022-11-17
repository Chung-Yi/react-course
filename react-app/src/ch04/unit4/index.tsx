import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("even");
  const handleClick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (counter % 2) {
      setText("odd");
    } else {
      setText("even");
    }
    console.log("counter: ", counter);
  }, [counter]);

  // mount
  //   useEffect(() => {
  //     console.log("hello");
  //   }, []);
  return (
    <>
      <h1>count: {counter}</h1>
      <button onClick={handleClick}>+1</button>
      <p>{text}</p>
    </>
  );
};

export default App;
