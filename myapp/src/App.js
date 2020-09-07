import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Container } from 'react-bootstrap'
import SearchBar from './Components/SearchBar'
import SearchResults from './Components/SearchResults'
import NominationsList from './Components/NominationsList'
// state should be saved here
function App() {
  return (
    <div className="App">
      
        <Container>
          <Row>
            <h2 className= "title"> The Shopify Movers App</h2>
          </Row>
          <div className="Content">
          <Row className="pageRow">
            <Col align={"center"}>
            <Card className="searchCard">
              <Card.Body>
                <Card.Title>Movie Title</Card.Title>
                <SearchBar />
              </Card.Body>

            </Card>
            </Col>
          </Row>
          <Row className="pageRow">
            <Col>
            <Card className="infoCard" >
              <Card.Body>
                <Card.Title>Results</Card.Title>
                <SearchResults />
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="infoCard">
              <Card.Body>
              <Card.Title>Nominations</Card.Title>
              <NominationsList />
              </Card.Body>

            </Card>
            </Col>
           
          </Row>
          </div>
        </Container>
      
    </div>

  );
}

export default App;
