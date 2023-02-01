import React from 'react' 
import { useState } from 'react';
import Actor from './Actor';
import Show from './Show';

export default function Search() {
  let [actor, setActor] = useState(false);
    let [show, setShow] = useState(false);
  
    function ShowTheShow() {
      setActor(false);
      setShow(true);
    }
  
    function ShowTheActor() {
      setActor(true);
      setShow(false);
    } 
  return (
    <div>
      <div className="App">
        <div className='Home'>
          {/* <img className='image' src="./tvm-header-logo.png" alt=" " /><br /> */}
          <input type="radio" onChange={() => ShowTheShow()} id="show" name="maze" value="Shows" />
          <label for="show">Shows</label>
          <input type="radio" onChange={() => ShowTheActor()} id="actor" name="maze" value="Actors" />
          <label for="actor">Actor</label>


        </div>

        {actor ? <Actor /> : ""}
        {show ? <Show /> : ""}


      </div>

    </div>
  );
}
