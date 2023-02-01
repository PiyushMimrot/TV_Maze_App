import React, { useState } from 'react';
import { useEffect } from 'react';


export default function Movies() {
  let [state, setState] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/1/episodes`)
      .then((response) => response.json())
      .then((json) => setState(json));

  }, []);

 
var listItem = state.map((element) => {
                return (
                  
                    <li key={element.id} className="list-ite">
                        <div className="link-containe">

                            <a href={element.url} className="lin">{element.name}</a>
                        </div>
                        <div>
                            {element.image ? (<img src={element.image.medium} alt={element.name} />
                            ) : (<div className="missing-img-div"><img src="" alt="" /><h1 style={{ color: "black" }}>no photo available</h1></div>)}
                            <a className="ur" href={element.url} > More details</a>
                           
                        </div>

                    </li>
                   
                )
            });
            return(
              <div className='movies_banner'>
              <ul className='list-containe'>{listItem}</ul>
              </div>
            )
}
