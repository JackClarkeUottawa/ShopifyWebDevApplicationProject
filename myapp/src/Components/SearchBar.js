import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      props.onSearchSubmitted(props.value).then(() => {
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

export default function SearchBar(props) {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Form>
      <Row>
        <Col>
          <Form.Label> Search Bar</Form.Label>
          <Form.Control
            placeholder={"search"}
            value={value}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <br />
          <LoadingButton
            onSearchSubmitted={props.onSearchSubmitted}
            value={value}
          />
        </Col>
      </Row>
    </Form>
  );
}
