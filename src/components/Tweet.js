import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { ListGroup, Card} from 'react-bootstrap';

const TweetCard = (symbol) => {
    // const { tweets } = useContext(GlobalContext);

    // const tweetData = tweets.map((data) =><Card.Body key={data.id} data={data}> {data.symbol.symbol}</Card.Body>)
    // const tweetMessages = tweets.map((m) => m.messages)

    return (
        <>

        <Card style={{ width: '18rem' }}>
        {console.log( symbol.title.symbol.symbol, "sym")}
        {/* {console.log("TWEETS", tweetData)} */}
        <Card.Text>
        { symbol.title.symbol.symbol }
        </Card.Text>
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