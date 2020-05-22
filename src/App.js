import React from 'react';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button, ListGroup} from 'react-bootstrap';
import AsyncExample from './components/Search';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand>Stock Tweets</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="https://github.com/Prouty89/stocktwits" target="__blank">Codebase</Nav.Link>
                  <Nav.Link href="https://api.stocktwits.com/developers" target="__blank">API Reference</Nav.Link>
              </Nav>
             <AsyncExample />
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className="container">
      <ListGroup>
        <ListGroup.Item>Cras justo</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      </div>
    </div>
  );
}

export default App;
