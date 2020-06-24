import React, { useContext } from 'react';
import TweetCard from './Tweet';
import { GlobalContext } from '../context/GlobalState';
import { Alert } from 'react-bootstrap';

const TweetDeck = () => {
    const { symbols } = useContext(GlobalContext);

    
    return (
        <>
            { symbols.length > 0 ? (
            symbols.map(stock => <TweetCard key={stock.id} stock={stock}/>)
            ) : 
            <Alert variant="dark">
                <Alert.Heading>Welcome to Stock Messages</Alert.Heading>
                <p>
                To begin, enter a company name or stock symbol in the search bar.  
                </p>
                <hr />
                <p className="mb-0">
                A single selection will return up to 30 messages, showing the most recent first. Clicking on the @user link will bring you to the associated profile on <a href="https://stocktwits.com/" rel="noopener noreferrer" target="_blank">Stocktwits.com</a>
                </p>
                <hr />
                <p className="mb-0">
                You may choose to search multiple stocks at once, turning this area into a dashboard for your selected symbols. Deleting a symbol from the search bar will also remove the messages associated with it. 
                </p>
            </Alert>
            }
        </>
    )
};

export default TweetDeck;