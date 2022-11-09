import React, { useState } from "react";

type BtnProps = {
  currentNum: number;
  onClickHandler: () => void;
};

const Btn: React.FC<BtnProps> = ({ currentNum, onClickHandler }) => {
  console.log("currentNum: ", currentNum);
  return (
    <button onClick={onClickHandler}>
      加1，
      <span>目前總數:{currentNum}</span>
    </button>
  );
};

const App: React.FC = () => {
  const [num, setNum] = useState(0);
  function btnClickHandler() {
    setNum(num + 1);
  }
  return (
    <>
      <h1>counter:{num}</h1>
      <Btn currentNum={num} onClickHandler={btnClickHandler} />
    </>
  );
};

export default App;
