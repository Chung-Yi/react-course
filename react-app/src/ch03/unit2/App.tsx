import React from "react";
import "./App.css";
import Header from "./components/Header";

const Body: React.FC = () => {
  return (
    <>
      <h1 className="color-blue">Hello</h1>
      <p>andy</p>
    </>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default App;
