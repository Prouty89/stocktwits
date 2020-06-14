import React from "react";


import { ListGroup, Card, Badge } from "react-bootstrap";

const TweetCard = (symbol) => {
  const stockSymbol = symbol.title.symbol.symbol;
  const stockName = symbol.title.symbol.title;
  const user = symbol.title.messages.map((users)=> users.user);

  const messages = symbol.title.messages;

//   const users = user.map((user) => {
//       return <h1>{user.username}</h1>
//   });

  const bodies = [];


  for (const [index, value] of messages.entries()) {
    bodies.push(
      <ListGroup.Item variant="light" key={index}>
        <div className="tweet-text"> 
        {value.body}
        <Badge variant="light">
        @{value.user.username}
        </Badge>
        <Badge variant="light">
        {new Date(value.created_at.replace(/(?=[AP]M)/i, ' ')).toLocaleString()}{''}
        </Badge>
        </div>
      </ListGroup.Item>
    );
  }

  return (
    <>
      <Card style={{ width: "18rem" }} bg={"info"} className="mb-2" border="dark" text="white">
  <Card.Header>{stockName}{''}(${stockSymbol})</Card.Header>
        <ListGroup>
        {bodies}
        
        </ListGroup>
      </Card>
    </>
  );
};

export default TweetCard;
