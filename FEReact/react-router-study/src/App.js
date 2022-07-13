import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import Menubar from './pages/Menubar';
import Movie from './pages/Movie';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}>
          <Route path=":movieId" element={<Movie/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App;