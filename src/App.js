import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import Favorites from './Components/Favorites';
import { useState } from 'react'

function App() {
  const [favorite, setFavorites] = useState(['beef', 'deer', 'trout'])

  return (
    <div className="App">
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/recipes'> Recipes </Link>
        <Link to='/favorites'> Favorites </Link>

      </nav>

      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/recipes' element={<Recipes 
            favorite={favorite}
            setFavorite={setFavorites}
          />}></Route>
          <Route path='/favorites' element={<Favorites
            favorite={favorite}
            setFavorites={setFavorites}
          />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
