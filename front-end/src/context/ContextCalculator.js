import React, { useContext, useReducer } from "react";
import { CalcReducer } from "../reducer/ReducerCalculator";

const CalcContext = React.createContext();

const defaultState = {
  Flour: 0,
  Water: 0,
  Salt: 0,
  Yeast: 0,
  Hidration: 0,
};

export const CalcProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CalcReducer, defaultState);

  const onChange = (e) => {
    dispatch({ type: "GET_QUANTITY", payload: e });
  };
  const resetHandle = () => {
    dispatch({ type: "RESET_FIELDS", payload: defaultState });
  };

  return (
    <CalcContext.Provider value={{ onChange, resetHandle, state }}>
      {children}
    </CalcContext.Provider>
  );
};
export const useCalcGlobalContext = () => {
  return useContext(CalcContext);
};
