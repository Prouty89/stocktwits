import React from "react";

import { ListGroup, Card, Badge } from "react-bootstrap";

const TweetCard = (symbol) => {
    
  const stockSymbol = symbol.title.symbol.symbol;
  const stockName = symbol.title.symbol.title;
  const messages = symbol.title.messages;
  const bodies = [];

  for (const [index, value] of messages.entries()) {
    bodies.push(
      <ListGroup.Item variant="light" key={index}>
        <div className="tweet-text">{value.body}</div>
        <blockquote className="blockquote mb-0">
          <a
            href={`https://stocktwits.com/${value.user.username}`}
            target="_blank"
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
      </ListGroup.Item>
    );
  }

  return (
    <>
      <Card
        style={{ width: "23rem", padding: 10, margin: 5 }}
        bg={"primary"}
        className="mb-2"
        border="dark"
        text="white"
      >
        <Card.Header>
          {stockName} (${stockSymbol})
        </Card.Header>
        <ListGroup style={{ overflowY: "overlay", maxHeight: 500 }}>
          {bodies}
        </ListGroup>
      </Card>
    </>
  );
};

export default TweetCard;
