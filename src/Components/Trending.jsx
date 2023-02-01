import React, { useState } from 'react';
import { useEffect } from 'react';


export default function Trending() {
  let [state, setState] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/1/seasons`)
      .then((response) => response.json())
      .then((json) => setState(json));

  }, []);


  var listItem = state.map((element) => {
    return (
      <li key={element.id} className = 'list'>
        <div>
          <img src={element.image.medium} alt={element.name} />
          <a className="url" href={element.url} >More details</a>
        </div>
      </li>
    )
  });
  return (
    <div className='Trending_banner'>
    <ul>{listItem}</ul>
    </div>
  )
}
