
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Create initial state

const initialState = {
    symbols: [],
}
// Create context

export const GlobalContext = createContext(initialState);

// Create provider component

export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    //Actions 
    function addSymbols(symbol) {
        dispatch({
            type: 'ADD_SYMBOLS',
            payload: symbol
        })
    }

    
    return(
    <GlobalContext.Provider value={{ 
        symbols: state.symbols,
        addSymbols,
        }}>
        {children}
    </GlobalContext.Provider>
    )

}