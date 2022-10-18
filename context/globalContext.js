import React, { useReducer, createContext, useContext } from "react";

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const globalReducer = (state, action) => {
  switch (action.type) {
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorStyles: action.cursorStyles,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    cursorStyles: "poniter",
  });

  const onCursor = (cursorStyles) => {
    dispatch({ type: "CURSOR_TYPE", cursorStyles: cursorStyles ?? "pointer" });
  };
  return (
    <GlobalDispatchContext.Provider value={(dispatch, onCursor)}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export default GlobalProvider;
// custom hooks to use dispatch and state

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
