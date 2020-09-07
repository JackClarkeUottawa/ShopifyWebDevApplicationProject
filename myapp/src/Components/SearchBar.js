import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      props.onSearchSubmitted().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : "Click to load"}
    </Button>
  );
}

export default class SearchBar extends React.Component {
  render() {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Label> Search Bar</Form.Label>
            <Form.Control placeholder={"search"} />
          </Col>
          <Col>
            <br />
            <LoadingButton onSearchSubmitted={this.props.onSearchSubmitted} />
          </Col>
        </Row>
      </Form>
    );
  }
}
