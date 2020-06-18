import React from "react";

import { ListGroup, Card, Badge } from "react-bootstrap";

const TweetCard = (symbol) => {

  const stockSymbol = symbol.stock.symbol.symbol;
  const stockName = symbol.stock.symbol.title;
  const messages = symbol.stock.messages;

  // messages is an array of indexed objects, we want to target the "body" value and push it to the bodies array. 
  const bodies = [];
  for (const [index, value] of messages.entries()) {
    bodies.push(
      <ListGroup.Item variant="light" key={index}>
        <div className="tweet-text">{value.body}</div>
        <blockquote className="blockquote mb-0">
          <a
            href={`https://stocktwits.com/${value.user.username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Link>@{value.user.username}</Card.Link>
          </a>
          <footer>
            <Badge>
              {new Date(
                value.created_at.replace(/(?=[AP]M)/i, " ")
              ).toLocaleString()}
              {""}
            </Badge>
          </footer>
        </blockquote>
        {""}
        {console.log(bodies, "bodies")}
      </ListGroup.Item>
    );
  }

  return (
    <>
      <Card
        style={{ width: "23rem", padding: 10, margin: 15, marginTop: 30 }}
        bg={"dark"}
        className="mb-2"
        border="dark"
        text="white"
      >
        <Card.Header style={{textAlign: 'center'}}>
          {stockName} (${stockSymbol}), {' '}{bodies.length} Messages
        </Card.Header>
        <ListGroup style={{ overflowY: "overlay", maxHeight: 500 }}>
          {bodies}
        </ListGroup>
      </Card>
    </>
  );
};

export default TweetCard;
