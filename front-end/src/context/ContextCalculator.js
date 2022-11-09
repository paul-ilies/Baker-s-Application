import React, { useContext, useReducer } from "react";
import { calcReducer } from "../reducer/ReducerCalculator";
import { defaultState } from "../utils/utils";

const CalcContext = React.createContext();

export const CalcProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calcReducer, defaultState);
  const value = [state, dispatch];

  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
};
export const useCalcGlobalContext = () => {
  const context = useContext(CalcContext);
  if (!context) {
    throw new Error("useCalcGlobalContext must be used inside Calculator");
  }
  return context;
};
