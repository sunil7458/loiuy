import { createContext, useContext, useReducer } from "react";

export const State = createContext();

export const Context = ({ reducer, intialstage, children }) => {
  return (
    <State.Provider value={useReducer(reducer, intialstage)}>
      {children}
    </State.Provider>
  );
};
export const UsestateValue = () => useContext(State);
