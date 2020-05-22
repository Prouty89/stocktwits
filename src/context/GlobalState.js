import React, { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer';

import axios from 'axios';

// Create initial state
const initialState = {
    tweets: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Create provider component
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    //Actions
    
    //Delete Tweet from UI
    function deleteSymbol(id) {
        dispatch({
            type: 'DELETE_SYMBOL',
            payload: id
        })
    }

    //Fetch Tweets when provided with cashtags from search submit. 
    function pullTweets(tweet) {
        dispatch({
            type: 'PULL_TWEETS',
            payload: tweet
        })
    }
    return(
    <GlobalContext.Provider value={{ 
        tweets: state.tweets,
        deleteSymbol,
        pullTweets
        }}>
        {children}
    </GlobalContext.Provider>
    )

}