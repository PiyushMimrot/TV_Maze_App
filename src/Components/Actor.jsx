import React, { useState, useEffect } from "react";
import ActorResults from "./ActorResults";

export default function Show() {
  const [state, setState] = useState({
    person: ""
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setIsSubmitted(false);
    setState({ person: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && state.person.length > 0) {
      fetch(`https://api.tvmaze.com/search/people?q=${state.person}`)
        .then((response) =>    
           response.json()         
        )
        .then((json) => {
 
          setError(null);
          setData(json);
        })
        .catch((error) => {
        
          setError(error);
        });
      // setState({ person: "" });
    }
    console.log("isSubmitted", isSubmitted);
  }, [isSubmitted, state.person]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="name"
          onChange={handleChange}
          value={state.person}
          className="input" placeholder="Search Actor`s name"
        />
        <button type="submit" className="submit-button">
          Search
        </button>
      </form>
      <ActorResults data={data} error={error} />
    </div>
  );
}
