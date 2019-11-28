import React, { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider(props) {
  return (
    <AppContext.Provider value={props.value}>
      {props.children}
    </AppContext.Provider>
  );
}
