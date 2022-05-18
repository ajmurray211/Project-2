import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import About from './Components/About'
import { useState } from 'react'

function App() {
  const [favorite, setFavorites] = useState([])

  return (
    <div className="App">
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/recipes'> Recipes </Link>
        <Link to='/about'> About </Link>
      </nav>

      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/recipes' element={<Recipes
            favorite={favorite}
            setFavorite={setFavorites}
          />}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
