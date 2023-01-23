import React, { useContext, useReducer, useMemo } from "react";
import { calcReducer } from "../reducer/ReducerCalculator";
import { defaultState } from "../utils/utils";

const CalcContext = React.createContext();

export const CalcProvider = (props) => {
  const [state, dispatch] = useReducer(calcReducer, defaultState);
  const value = useMemo(() => {
    return [state, dispatch];
  }, [state]);

  return <CalcContext.Provider value={value} {...props} />;
};
export const useCalcGlobalContext = () => {
  const context = useContext(CalcContext);
  if (!context) {
    throw new Error("useCalcGlobalContext must be used inside Calculator");
  }
  return context;
};
