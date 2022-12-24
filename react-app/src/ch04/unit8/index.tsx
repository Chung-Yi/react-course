import React, { useState, useRef } from "react";

const App: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  //   let sum = 0;
  const sumRef = useRef(0);

  console.log("sumRef.current: ", sumRef.current);

  function click() {
    sumRef.current = sumRef.current + 1;
    console.log("sumRef.current: ", sumRef.current);

    if (sumRef.current === 5) {
      setHidden(true);
    } else if (sumRef.current > 15) {
      setHidden(false);
    }
  }
  return (
    <>
      <h1>Ref</h1>
      <button onClick={click}>+1</button>
      {hidden && <div>hidden block</div>}
    </>
  );
};

export default App;
