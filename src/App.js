import './App.css';
import { useState } from 'react';
import Actor from './Components/Actor';
import Show from './Components/Show';

function App() {
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
    <div className="App">
      <div className='Home'>
        {/* <img className='image' src={"./tvm-header-logo.png"} alt={"image"} /><br /> */}
        <input type="radio" onChange={() => ShowTheShow()} id="show" name="maze" value="Shows" />
        <label for="show">Shows</label>
        <input type="radio" onChange={() => ShowTheActor()} id="actor" name="maze" value="Actors" />
        <label for="actor">Actor</label>

      </div>

      {actor ? <Actor /> : ""}
      {show ? <Show /> : ""}


    </div>
  );
}

export default App;
