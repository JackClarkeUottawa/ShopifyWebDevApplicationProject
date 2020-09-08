import React from "react";
import Button from "react-bootstrap/Button";

export default function NominationsList(props) {
  return (
    <>
      <p>Search Results</p>
      <ul>
        {props.nominations.map((movie, index) => (
          <li>
            {movie.Title}, {movie.Year}{" "}
            <Button
              size={"sm"}
              onClick={() => {
                props.removeFromNominationsList(index);
              }}
              variant={"danger"}
            >
              remove
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
