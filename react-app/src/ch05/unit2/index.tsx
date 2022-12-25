import React, { useState } from "react";
import { BtnProvider, useBtnContext } from "./context/BtnContext";

type Props = {
  btnVisible: boolean;
};

const B: React.FC = () => {
  return (
    <>
      <p>B component</p>
      <C />
    </>
  );
};

const C: React.FC = () => {
  return (
    <>
      <p>C component</p>
      <D />
    </>
  );
};

const D: React.FC = () => {
  const data = useBtnContext();
  console.log("data.btnVisible: ", data.btnVisible);
  return <button>D component</button>;
};

const App: React.FC = () => {
  return (
    <BtnProvider>
      <h1>App</h1>
      <B />
    </BtnProvider>
  );
};

export default App;
