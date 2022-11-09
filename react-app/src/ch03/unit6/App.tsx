import React from "react";
import styled from "styled-components";

type BtnType = {
  colorStatus: boolean;
};

const Button = styled.button<BtnType>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${(props) =>
    props.colorStatus === false ? "black" : "palevioletred"};
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const App: React.FC = () => {
  return (
    <>
      <h1>hello</h1>;<Button colorStatus={false}>btn</Button>
    </>
  );
};

export default App;
