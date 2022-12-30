import React, { useState, useMemo, useCallback, memo } from "react";

type Props = {
  num: number;
  obj: { name: string };
};

const B: React.FC<Props> = memo(({ num, obj }) => {
  console.log("render B");
  return (
    <p>
      B {num} {obj.name}
    </p>
  );
});

const App: React.FC = () => {
  console.log("render App");
  const [value, setValue] = useState(false);
  const [num, setNum] = useState(0);
  const [obj, setObj] = useState({ name: "" });

  const memoObj = useMemo(() => {
    return obj;
  }, [obj.name]);

  return (
    <>
      <h1>App</h1>
      <B num={num} obj={memoObj} />
      <button
        onClick={() => {
          setValue(!value);
        }}
      >
        render
      </button>

      <button
        onClick={() => {
          setNum(100);
        }}
      >
        setting num
      </button>

      <button
        onClick={() => {
          setObj({ name: "andy" });
        }}
      >
        setting name
      </button>
    </>
  );
};

export default App;
