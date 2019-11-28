import React, { createContext } from "react";

export const BoardCardContext = createContext();

export default function BoardCardContextProvider(props) {
  return (
    <BoardCardContext.Provider value={props.value}>
      {props.children}
    </BoardCardContext.Provider>
  );
}
