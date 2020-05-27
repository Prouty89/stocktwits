import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { ListGroup} from 'react-bootstrap';

const TweetDeck = () => {
    const { tweets } = useContext(GlobalContext);
    return (
        <>

        <ListGroup>
            { tweets.length > 0 ? (
            tweets.map(tweet => <ListGroup.Item key={tweet.id} tweet={tweet}>{tweet.symbol.title}</ListGroup.Item>)
            ) : <h1>No Tweets</h1>
            }
            {tweets.length > 0 ? console.log(tweets.map(message => message.messages.map((body)=> body))) : console.log("NADA")}
            {/* { tweets.length > 0 ? (
                tweets.map(message => <ListGroup.Item key={message.id} message={message}>{message.messages}</ListGroup.Item>)
            ) : <h1>No Tweets for this Symbol available </h1>
            } */}
        </ListGroup>

        </>

    )
};

export default TweetDeck;