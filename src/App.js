import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import Search from './components/Search';
import TweetDeck  from './components/TweetDeck';
import { GlobalProvider } from './context/GlobalState';




function App() {



  return (
    <GlobalProvider>
    <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand>Stock Messages</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="https://github.com/Prouty89/stocktwits" target="__blank">Codebase</Nav.Link>
                  <Nav.Link href="https://api.stocktwits.com/developers" target="__blank">API Reference</Nav.Link>
              </Nav>
             <Search />
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className="container">
        <TweetDeck />
    </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
