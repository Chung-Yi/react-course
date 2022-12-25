import React, { useState } from "react";

type Props = {
  btnVisible: boolean;
};
const B: React.FC<Props> = ({ btnVisible }) => {
  return (
    <>
      <p>B component</p>
      <C btnVisible={btnVisible} />
    </>
  );
};

const C: React.FC<Props> = ({ btnVisible }) => {
  return (
    <>
      <p>C component</p>
      <D btnVisible={btnVisible} />
    </>
  );
};

const D: React.FC<Props> = ({ btnVisible }) => {
  console.log("btnVisible: ", btnVisible);
  return <button>D component</button>;
};

const App: React.FC = () => {
  const [btnVisible, setBtnVisible] = useState(false);
  return (
    <>
      <h1>App</h1>
      <B btnVisible={btnVisible} />
    </>
  );
};

export default App;
