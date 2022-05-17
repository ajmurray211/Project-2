import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Components/Home';
import Recipes from './Components/Recipes';

function App() {
  const [searchVal, setSearchVal] = useState('')

  const handleChange = (event) => {
    setSearchVal(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchVal('')
  }

  return (
    <div className="App">
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/recipes'> Recipes </Link>
      </nav>

      <div>
        <Routes>
          <Route path='/' element={<Home
            searchVal={searchVal}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />}></Route>
          <Route path='/recipes' element={<Recipes></Recipes>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
