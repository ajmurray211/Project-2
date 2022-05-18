import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import RecipeTile from './Components/RecipeTile';

function App() {
  
  return (
    <div className="App">
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/recipes'> Recipes </Link>
      </nav>

      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/recipes' element={<Recipes/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
