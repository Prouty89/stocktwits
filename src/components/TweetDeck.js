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
            ) : 
            <Alert variant="dark">
                <Alert.Heading>Welcome to Stock Messages</Alert.Heading>
                <p>
                To begin, use the search bar by company or $cashtag to return the latest posts that mention the company and/or stock. 
                </p>
                <hr />
                <p className="mb-0">
                A single request will return up to 30 messages, showing the most recent first. Clicking on the @user link will bring you to the associated profile on <a href="https://stocktwits.com/">Stocktwits.com</a>
                </p>
                <hr />
                <p className="mb-0">
                You may choose to seach multiple stocks at once, turning this area into a dashboard for your selected $cashtags. Deleting a $cashtag from the search bar will also remove the messages associated with it. 
                </p>
            </Alert>
            }
        </>
    )
};

export default TweetDeck;