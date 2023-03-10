import { createContext, useState } from "react";

export const ModeContext = createContext({
  mode: null,
  setMode: () => {},
  toogleFunc: () => {},
});

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const toogleFunc = () => {
    setMode(!mode);
  };
  console.log(mode);

  const value = { mode, setMode, toogleFunc };
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};
