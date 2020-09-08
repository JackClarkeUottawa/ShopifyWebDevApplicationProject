import React from "react";
import Button from "react-bootstrap/Button";

export default function SearchResults(props) {
  console.log(props.movieError);
  function isDisabled(movie) {
    // theres probably a better way to do this, but I'm low on time
    for (let item in props.movieNominees) {
      if (
        props.movieNominees[item].Title === movie.Title &&
        props.movieNominees[item].Year === movie.Year
      ) {
        return true;
      } else if (props.movieNominees.length >= 5) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <p>Search Results</p>
      <ul>
        {!props.movieError ? (
          props.results.map((movie) => (
            <li>
              {movie.Title}, {movie.Year}{" "}
              <Button
                type={"button"}
                size={"sm"}
                onClick={() => {
                  props.addToNominationsList(movie);
                }}
                disabled={isDisabled(movie)}
              >
                Nominate
              </Button>
            </li>
          ))
        ) : (
          <p>movie not found</p>
        )}
      </ul>
    </>
  );
}
