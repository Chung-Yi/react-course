import React, { useState, useMemo, useCallback, useEffect } from "react";

const App: React.FC = () => {
  console.log("render");

  const num = 0;

  const [value, setValue] = useState(false);

  const memoObj = useMemo(() => {
    const obj = { name: "andy", data: {} };
    return obj;
  }, []);

  const memoFunc = useCallback(
    function () {
      console.log("num: ", num);
      console.log("useCallback");
    },
    [num]
  );

  useEffect(() => {
    console.log("obj");
  }, [memoFunc]);
  return (
    <>
      <h1>App</h1>

      <button
        onClick={() => {
          setValue(!value);
        }}
      >
        render
      </button>
    </>
  );
};

export default App;
