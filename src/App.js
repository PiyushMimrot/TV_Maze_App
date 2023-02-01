
import Header from './Components/Header';
import './App.css';
import './Header.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './Components/Movies';
import Trending from './Components/Trending';
import Search from './Components/Search';
import React from 'react';
import './Movies.css';
import './Trending.css';

function App() {


return(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path='/' element = {<React.Fragment>
      <Movies/></React.Fragment>}/>
  </Routes>

  <Routes>
    <Route exact path='/Trending' element = {<React.Fragment>
      <Trending/></React.Fragment>}/>
  </Routes>

  <Routes>
    <Route exact path='/Search' element = {<React.Fragment>
      <Search/></React.Fragment>}/>
  </Routes>

  </BrowserRouter>
    
  
);
 }



export default App;
