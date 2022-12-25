import React, { useState, useContext, createContext } from "react";

const defaultValue = {
  btnVisible: false,
};

interface Props {
  children: React.ReactNode;
}

const BtnContext = createContext(defaultValue);

export const BtnProvider: React.FC<Props> = ({ children }) => {
  const [btnVisible, setBtnVisible] = useState(true);
  return (
    <>
      <BtnContext.Provider value={{ btnVisible }}>
        {children}
      </BtnContext.Provider>
    </>
  );
};

export const useBtnContext = () => {
  return useContext(BtnContext);
};
