import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { ListGroup} from 'react-bootstrap';

const TweetDeck = () => {
    const { tweets } = useContext(GlobalContext);
    return (
        <>

        <ListGroup horizontal>
            { tweets.length > 1 ? (
            tweets.map(tweet => <ListGroup.Item key={tweet.id} tweet={tweet}>{tweet.symbol.title}</ListGroup.Item>)
            ) : <h1>No Tweets</h1>
            }
        </ListGroup>

        </>

    )
};

export default TweetDeck;