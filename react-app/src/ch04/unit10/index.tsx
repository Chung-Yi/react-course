import React, { useState, useRef } from "react";

const App: React.FC = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  function onChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget) {
      setAccount(event.currentTarget.value);
    }
  }

  function onChangePasswordHandler(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget) {
      setPassword(event.currentTarget.value);
    }
  }

  function login() {
    console.log("account: ", account);
    console.log("password: ", password);
  }
  return (
    <>
      <h1>Form</h1>
      <p>account</p>
      <input
        type="text"
        name=""
        id="account"
        value={account}
        onChange={onChangeHandler}
      ></input>
      <p>Your input account: {account}</p>
      <p>password</p>
      <input
        type="password"
        name=""
        id="password"
        onChange={onChangePasswordHandler}
      ></input>
      <div>
        <button>login</button>
      </div>
    </>
  );
};

export default App;
