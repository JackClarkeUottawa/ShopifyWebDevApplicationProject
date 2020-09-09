import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function LoadingButton(props) {
  let isLoading = props.isLoading;
  let setLoading = props.setLoading;

  useEffect(() => {
    if (isLoading) {
      props.onSearchSubmitted(props.value).then(() => {
        setLoading(false);
      });
    }
  }, [isLoading,props,setLoading]);

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
  const [state, setState] = useState({
    value: "",
    loading: false,
  });
  let value = state.value;
  let loading = state.loading;
  function setValue(inValue) {
    value = inValue;
    setState({
      value: inValue,
      loading: state.loading,
    });
  }

  function setLoading(inLoading) {
    loading = inLoading;
    setState({
      value: state.value,
      loading: inLoading,
    });
  }

  const handleChange = (e) => {
    if (e && e.key !== "Enter") setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    props.onSearchSubmitted(value).then(() => {
      setLoading(false);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col sm={10}>
          <Form.Control
            type={"text"}
            placeholder={"search"}
            value={value}
            onChange={handleChange}
          />
        </Col>
        <Col sm={2} className={"searchButtonCol"}>
          <LoadingButton
            onSearchSubmitted={props.onSearchSubmitted}
            value={value}
            type={"submit"}
            isLoading={loading}
            setLoading={setLoading}
          />
        </Col>
      </Row>
    </Form>
  );
}
