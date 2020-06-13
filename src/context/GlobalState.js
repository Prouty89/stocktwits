
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Create initial state

const initialState = {
    symbols: [],
    messages: []
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
    function addMessages(message) {
        dispatch({
            type: 'ADD_MESSAGES',
            payload: message
        })
    }
    
    return(
    <GlobalContext.Provider value={{ 
        symbols: state.symbols,
        messages: state.messages,
        addSymbols,
        addMessages,
        }}>
        {children}
    </GlobalContext.Provider>
    )

}