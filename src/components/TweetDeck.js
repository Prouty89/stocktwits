import React, { useContext } from 'react';

import TweetCard from './Tweet';

import { GlobalContext } from '../context/GlobalState';

import { Alert } from 'react-bootstrap';

const TweetDeck = () => {
    const { symbols } = useContext(GlobalContext);

    
    return (
        <>

       
            { symbols.length > 0 ? (
            symbols.map(title => <TweetCard key={title.id} title={title}/>)
            ) : <Alert variant="light">No tweets yet! Enter your search to begin.</Alert>
            }

        

        </>

    )
};

export default TweetDeck;