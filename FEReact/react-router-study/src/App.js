import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import Menubar from './pages/Menubar';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/moives" element={<Movies/>}/>
      </Route>
    </Routes>
  )
}

export default App;