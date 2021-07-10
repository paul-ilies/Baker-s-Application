import React, { useContext, useReducer } from 'react';
import { CalcReducer } from '../reducer/ReducerCalculator'

//creare obiect contextual
const CalcContext = React.createContext();

//definire valori implicite
const defaultState = {
    Flour: 0,
    Water: 0,
    Salt: 0,
    Yeast: 0,
    Hidration: 0,
}

export const CalcProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CalcReducer, defaultState)

    //functie ce preia valorile inserate de catre utilizator
    const onChange = (e) => {
        dispatch({ type: "GET_QUANTITY", payload: e })
    }
    // functie ce reseteaza valorile la cele implicite
    const resetHandle = () => {
        dispatch({ type: "RESET_FIELDS", payload: defaultState })
    }
    //returnare
    return (
        <CalcContext.Provider
            value={{ onChange, resetHandle, state }}>
            {children}
        </CalcContext.Provider>
    )
}
//customizare functie fara necesitatea importarii useContext() in componente
export const useCalcGlobalContext = () => {
    return useContext(CalcContext)
}


