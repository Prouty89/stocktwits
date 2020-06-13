import React from "react";


import { ListGroup, Card } from "react-bootstrap";

const TweetCard = (symbol) => {
  const cardTitle = symbol.title.symbol.symbol;

  const messages = symbol.title.messages;

  const bodies = [];

  for (const [index, value] of messages.entries()) {
    bodies.push(
      <ListGroup className="list-group-flush" key={index}>
        {value.body}
      </ListGroup>
    );
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Text>{cardTitle}</Card.Text>
        {bodies}
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default TweetCard;
