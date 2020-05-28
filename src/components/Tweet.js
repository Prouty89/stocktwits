import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { ListGroup, Card} from 'react-bootstrap';

const TweetCard = () => {
    const { tweets } = useContext(GlobalContext);

    const tweetData = (tweets.map((data) => data.symbol.symbol))
    // const tweetMessages = tweets.map((m) => m.messages)

    return (
        <>

        <Card style={{ width: '18rem' }}>
        <Card.Body>
        {tweetData}
        {console.log("TWEETS", tweetData)}
        <Card.Text>
             tweets
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
    {/* {console.log(tweetMessages)} */}
        </ListGroup>
        <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>

        </>

    )
};

export default TweetCard;