import React, { createContext, useContext, useReducer } from "react";
// prepare data layer
const stateContext = createContext();

// wrap data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

// pull info form data layer

export const useStateValue = () => useContext(stateContext);
