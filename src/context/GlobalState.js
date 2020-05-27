
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

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
    function addTweets(tweets) {
        dispatch({
            type: 'ADD_TWEETS',
            payload: tweets
        })
    }
    function deleteTweet(id) {
        dispatch({
            type: 'DELETE_TWEET',
            payload: id
        })
    }
    
    return(
    <GlobalContext.Provider value={{ 
        tweets: state.tweets,
        addTweets,
        deleteTweet
        }}>
        {children}
    </GlobalContext.Provider>
    )

}